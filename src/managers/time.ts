import { Manager } from ".";

export class TimeManager extends Manager {
  public createTimeout(name: string, timeout: number): void {
    setTimeout((): void => {
      this.master.emit(`time:timeout-${name}`, {
        name,
        time: Date.now()
      });
    }, timeout);
  }

  public createInterval(name: string, interval: number): void {
    setInterval((): void => {
      this.master.emit(`time:interval-${name}`, {
        name,
        time: Date.now()
      });
    }, interval);
  }
}
