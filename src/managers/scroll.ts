import { ElementHandle } from "puppeteer";

import { Coordinates, Rect } from "../types";

import { Manager } from ".";

export class ScrollManager extends Manager {
  public async scrollToElement(elem: ElementHandle): Promise<void> {
    const page = await this.master.currentOrNewPage();
    const { x, y } = await page.evaluate((e: HTMLElement): Coordinates => {
      e.style.color = "red";
      e.style.backgroundColor = "yellow";
      e.style.border = "3px solid green";

      const documentElement = document.documentElement;
      const rect = e.getBoundingClientRect() as Rect;

      const halfWindowWidth = Math.round(window.innerWidth / 2);
      const halfWindowHeight = Math.round(window.innerHeight / 2);

      const halfElemWidth = Math.round(rect.width / 2);
      const halfElemHeight = Math.round(rect.height / 2);

      const dx = halfElemWidth - halfWindowWidth;
      const dy = halfElemHeight - halfWindowHeight;

      let x = rect.x + window.pageXOffset + dx || documentElement.scrollLeft;
      x = Math.min(
        x,
        documentElement.scrollWidth - documentElement.clientWidth
      );
      x = Math.max(x, 0);

      let y = rect.y + window.pageYOffset + dy || documentElement.scrollTop;
      y = Math.min(
        y,
        documentElement.scrollHeight - documentElement.clientHeight
      );
      y = Math.max(y, 0);

      return { x, y };
    }, elem);

    await page.evaluate(
      (y: number): Promise<void> =>
        new Promise(
          (resolve): void => {
            let currentX = window.scrollX;
            let currentY = window.scrollY;

            const scrollY = (): void => {
              if (Math.abs(y - currentY) < 5) return resolve();
              const step = currentY < y ? 1 : -1;
              currentY = currentY + step;
              window.scroll(currentX, currentY);

              setTimeout(scrollY, 1);
            };

            scrollY();
          }
        ),
      y
    );

    await page.evaluate(
      (x: number): Promise<void> =>
        new Promise(
          (resolve): void => {
            let currentX = window.scrollX;
            let currentY = window.scrollY;

            const scrollX = (): void => {
              if (Math.abs(x - currentX) < 5) return resolve();
              const step = currentX < x ? 1 : -1;
              currentX = currentX + step;
              window.scroll(currentX, currentY);

              setTimeout(scrollX, 1);
            };

            scrollX();
          }
        ),
      x
    );
  }

  public async scrollToBottom(): Promise<void> {
    const page = await this.master.currentOrNewPage();
    await page.evaluate(
      (): Promise<void> =>
        new Promise(
          (resolve): void => {
            const y =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight;

            let currentX = window.scrollX;
            let currentY = window.scrollY;

            const scrollY = (): void => {
              if (Math.abs(y - currentY) == 0) return resolve();
              const step = currentY < y ? 1 : -1;
              currentY = currentY + step;
              window.scroll(currentX, currentY);

              setTimeout(scrollY, 1);
            };

            scrollY();
          }
        )
    );
  }
}
