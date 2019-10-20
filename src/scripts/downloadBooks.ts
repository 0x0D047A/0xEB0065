import { MasterManager } from "../managers";

import { KeyboardManager } from "../managers/keyboard";
import { MouseManager } from "../managers/mouse";
import { ScreenshotManager } from "../managers/screenshot";
import { ScrollManager } from "../managers/scroll";
import { TimeManager } from "../managers/time";

import { PacktpubAuthManager } from "../managers/packtpub/auth";
import { PacktpubDownloadManager } from "../managers/packtpub/download";

const createBots = (master: MasterManager): void => {
  // Common managers.
  master.createManager("keyboard", KeyboardManager);
  master.createManager("mouse", MouseManager);
  master.createManager("scroll", ScrollManager);
  master.createManager("screenshot", ScreenshotManager);
  master.createManager("time", TimeManager);

  // Packtpub managers.
  master.createManager("auth", PacktpubAuthManager);
  master.createManager("download", PacktpubDownloadManager);
};

export default async (master: MasterManager): Promise<void> => {
  createBots(master);

  const authManager = master.getManager<PacktpubAuthManager>("auth");
  const downloadManager = master.getManager<PacktpubDownloadManager>("download");

  await authManager.goToLoginPage();  console.log("went to login page");
  await authManager.login();          console.log("logged in");

  await downloadManager.downloadBooks();
};