import * as apify from "apify";

import { MasterManager } from "./managers";
import { readConfig } from "./config";

process.on(
  "uncaughtException",
  (err): void => {
    console.error(err);
    process.exit(1);
  }
);

const main = async (): Promise<void> => {
  const debug = process.env.NODE_ENV === "debug";
  const scriptName = process.argv[2];
  const configContents = process.argv[3];

  if (scriptName == null) {
    console.error("No script name provided");
    process.exit(1);
  }

  const script = (await import(`./scripts/${scriptName}`)).default;

  const config = readConfig(configContents, `./assets/config.json`);

  const options = {
    stealth: true,
    headless: true,
    ignoreHTTPSErrors: true,
  };

  if (debug) {
    options.headless = false;
  }

  const browser = await apify.launchPuppeteer(options);
  await browser.defaultBrowserContext();
  const master = new MasterManager(browser, config);

  await script(master);

  if (!debug) {
    process.exit(0);
  };
};

main();
