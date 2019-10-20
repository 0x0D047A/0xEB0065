import * as fs from "fs";

import { Action } from "../actionSystem";

import { Manager, MasterManager } from ".";

export class ScreenshotManager extends Manager {
  private dirName: string | null;

  public constructor(master: MasterManager, config: any) {
    super(master, config);

    this.dirName = null;
  }

  public createDir(): void {
    const { scriptName } = this.master.config;
    const dirName = `./screenshots/${scriptName}-${Date.now()}`;
    fs.mkdirSync(dirName);
    this.dirName = dirName;
  }

  public async takeScreenshot(): Promise<void> {
    if (this.dirName == null) throw new Error("No directory created");

    const page = await this.master.currentOrNewPage();
    const path = `${this.dirName}/${Date.now()}.png`;
    await page.screenshot({
      path
    });
  }
}

export const createTakeScreenshotAction = (probability = 1): Action<any> => ({
  name: "screenshot:takeScreenshot",
  probability,
  async execute(base, data): Promise<any> {
    const screenshotManager = base.getManager<ScreenshotManager>("screenshot");
    await screenshotManager.takeScreenshot();
    return data;
  }
});
