import { Browser, Page } from "puppeteer";

import { ActionSystem, Action } from "../actionSystem";

export type PageCallback<T> = (page: Page) => Promise<T>;
import * as fs from "fs";

export abstract class Manager {
  public master: MasterManager;
  public actionSystem: ActionSystem;
  public config: any;

  public constructor(master: MasterManager | null, config: object = {}) {
    if (master == null) master = (this as Manager) as MasterManager;
    this.master = master;
    this.actionSystem = new ActionSystem(master);
    this.config = config;
  }
}

export class MasterManager extends Manager {
  private browser: Browser;
  private children: { [name: string]: Manager };
  private pages: Page[];

  public constructor(browser, config) {
    super(null, config);

    this.browser = browser;
    this.config = config;
    this.children = { master: this };
    this.pages = [];
  }

  public on(event: string, action: Action<any>): void {
    if (event.indexOf(":") === -1) event = `master:${event}`;
    if (event[0] === "~") {
      event = event.slice(1);
      this.actionSystem.on(event, action);
    } else {
      const [managerName, eventName] = event.split(":");
      this.getManager(managerName).actionSystem.on(eventName, action);
    }
  }

  public async emit(event: string, data: any): Promise<any> {
    if (event.indexOf(":") === -1) event = `master:${event}`;
    const [managerName, eventName] = event.split(":");
    return await this.getManager(managerName).actionSystem.emit(
      eventName,
      data,
      this.actionSystem.handlers[event]
    );
  }

  public addManager(name: string, child: Manager): void {
    this.children[name] = child;
  }

  public createManager(
    name: string,
    ctor: { new (master: MasterManager, config: any): Manager }
  ): void {
    let cfg = this.config[name];
    if (cfg == null) cfg = {};
    this.children[name] = new ctor(this, cfg);
  }

  public getManager<T extends Manager>(name: string): T {
    return this.children[name] as T;
  }

  public async newPage(): Promise<Page> {
    const preloadFile = fs.readFileSync("./assets/preload.js", "utf8");
    const page = await this.browser.newPage();
    page.setDefaultNavigationTimeout(0);
    
    await page.evaluateOnNewDocument(preloadFile);

    this.pages.push(page);
    return page;
  }

  public async closePage(): Promise<void> {
    const page = this.pages.pop();
    if (page != null) {
      await page.close();
    }
  }

  public currentPage(): Page | null {
    return this.pages[this.pages.length - 1];
  }

  public async currentOrNewPage(): Promise<Page> {
    let page = this.currentPage();
    if (page == null) page = await this.newPage();
    return page;
  }

  public async withNewPage<T>(cb: PageCallback<T>): Promise<T> {
    await this.newPage();
    const result = await cb(this.currentPage() as Page);
    await this.closePage();
    return result;
  }

  public async withNavigation<T>(cb: PageCallback<T>): Promise<T> {
    let page = await this.currentOrNewPage();
    const nav = page.waitForNavigation();
    const result = await cb(page);
    await nav;
    return result;
  }
}
