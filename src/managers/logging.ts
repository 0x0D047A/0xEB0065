import * as colors from "colors/safe";

import { Action } from "../actionSystem";
import { stringify } from "../utils";

import { Manager, MasterManager } from ".";

export class LoggingManager extends Manager {
  public info(msg: string, data: any = null): void {
    this.print(msg, colors.green, data);
  }

  public debug(msg: string, data: any = null): void {
    this.print(msg, colors.blue, data);
  }

  public warn(msg: string, data: any = null): void {
    this.print(msg, colors.yellow, data);
  }

  public error(msg: string, data: any = null): void {
    this.print(msg, colors.red, data);
  }

  private print(
    msg: string,
    color: (s: string) => string,
    data: any = null
  ): void {
    let output = color(`\n[${new Date().toLocaleString("en-US")}] ${msg}`);
    if (data != null) {
      output += `\n${colors.grey(stringify(data))}`;
    }
    console.log(output);
  }
}

export const createLogAction = (msg): Action<any> => ({
  name: "logging:log",
  priority: 999,
  probability: 1,
  async execute(master: MasterManager, data: any): Promise<any> {
    const loggingManager: LoggingManager = master.getManager("logging");
    loggingManager.info(msg, data);

    return data;
  }
});
