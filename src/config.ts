import { readFileSync } from "fs";

export const readConfig = (contents: string, path: string): any => {
  let configContents = contents;
  let config;
  if (configContents == null) {
    try {
      configContents = readFileSync(path, "utf8");
    } catch (e) {
      console.error(`Failed to open config at ${path}.`);
      process.exit(1);
    }
  }
  try {
    config = JSON.parse(configContents);
  } catch (e) {
    console.error("Failed to parse config. Make sure it's valid JSON.");
    process.exit(1);
  }
  return config;
};
