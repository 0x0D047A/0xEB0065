import { writeFile } from "fs";
import * as TurndownService from "turndown";

import { Manager } from "..";
import { download, replaceAsync, sleep } from "../../utils";

export class PacktpubDownloadManager extends Manager {
  public async downloadBooks() {
    for (const link of this.config.links) {
      await this.downloadBook(link);
    }
  }

  public async downloadBook(link) {
    const { output } = this.config;

    await this.master.withNewPage(async page => {
      await page.goto(link);
      await page.waitForSelector("div > ul[ng-class] > li[ng-repeat] > a[ng-href][href]");

      const $title = await page.$("#book-wrapper h3");
      const title = await page.evaluate((t: HTMLElement) => t.innerText, $title);

      const chapters = await page.$$("div > ul[ng-class] > li[ng-repeat] > a[ng-href][href]");

      console.log(`${title}: found ${chapters.length} chapters`);

      let i = 1;

      let result = `# ${title}\n\n`;

      for (const chapter of chapters) {
        const link = await page.evaluate((c: HTMLElement) => c.getAttribute("href"), chapter) as string;
        await this.master.withNewPage(async p => {
          await p.goto(`https://subscription.packtpub.com${link}`);

          try {
            await p.waitForSelector(".book-content");
          } catch (e) {
            console.log('failed to load chapter content; try again');
            try {
              await p.waitForSelector('.book-content');
            } catch (e) {
              console.log('failed to load chapter content; skip');
              
              console.log(`${title}: failed to process chapter (${i}/${chapters.length})`);
              i++;
              return;
            }
          }
          
          await p.evaluate(() => {
            const $cs = document.querySelectorAll("pre > code") as any;
            for (const $c of $cs) $c.innerHTML = $c.innerText;
          });

          const $body = await p.$(".book-content");
          const body = await p.evaluate((b: HTMLElement) => b.innerHTML, $body) as string;

          result += await this.html2md(body);
          result += '\n\n';

          console.log(`${title}: processed chapter (${i}/${chapters.length})`);
          i++;
        });
      }

      // result = result.replace(/(\n)*!\[\]\(https:\/\/d3ginfw2u4xn7p\.cloudfront\.net\/2358461ba91a438c8ae0137082cf3cf1\/images\/locked-video_1024\.jpg\)(\n)*/gm, '');

      await new Promise((resolve, reject) => {
        writeFile(`${output}/${title}.md`, result, (err) => {
          if (err != null) reject(err);
          else resolve();
        });
      });
    });
  }

  public async html2md(html: string) {
    const images = this.config.output + '/images';

    const turndown = new TurndownService();
    let md = turndown.turndown(html.replace(/<kbd>/g, '<code>').replace(/<\/kbd>/g, '</code>'))
      .replace(/(\n)?\!\[\]\(https:\/\/d3ginfw2u4xn7p\.cloudfront\.net\/2358461ba91a438c8ae0137082cf3cf1\/images\/locked-video_1024\.jpg\)(\n)?/gm, '')
    
    // md = md.replace(/!\[(.*)\]\((.*)\)/g, (s, d, l) => {
    //   const timestamp = new Date().valueOf();
    // });
    md = await replaceAsync(md, /!\[([^\]]*)\]\(([^)]*).png\)/g, async (s, d, l) => {
      const base64 = Buffer.from(l).toString('base64');
      const output = `${images}/${base64}.png`;
      await new Promise((resolve, reject) => download(l+'.png', output, resolve));

      return `![${d}](./images/${base64}.png)`;
    });

    return md;
  }
}