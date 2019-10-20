import { Manager } from "..";
import { KeyboardManager } from "../keyboard";
import { MouseManager } from "../mouse";
import { ScrollManager } from "../scroll";

export class PacktpubAuthManager extends Manager {
  public async goToLoginPage(): Promise<void> {
    const page = await this.master.currentOrNewPage();
    await page.goto("https://subscription.packtpub.com/login");
  }

  public async login(): Promise<void> {
    const { email, password } = this.config;
    await this.master.withNavigation(
      async (page): Promise<any> => {
        const keyboardManager = this.master.getManager<KeyboardManager>(
          "keyboard"
        );
        const mouseManager = this.master.getManager<MouseManager>("mouse");
        const scrollManager = this.master.getManager<ScrollManager>("scroll");

        await page.waitForSelector("input[name=email]");

        const $email = await page.$("input[name=email]");
        const $pass = await page.$("input[name=password]");
        const $btn = await page.$("div#login-form > form > button[type=submit]");

        if (!$email || !$pass || !$btn) {
          return;
        }

        await scrollManager.scrollToElement($email);
        await mouseManager.moveToElement($email);
        await mouseManager.click();
        await keyboardManager.type(email);

        await scrollManager.scrollToElement($pass);
        await mouseManager.moveToElement($pass);
        await mouseManager.click();
        await keyboardManager.type(password);

        await scrollManager.scrollToElement($btn);
        await mouseManager.moveToElement($btn);
        await mouseManager.click();
      }
    );
  }
}
