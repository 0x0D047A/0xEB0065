import { ElementHandle, Mouse } from "puppeteer";

import { Coordinates } from "../types";
import { random, sleep } from "../utils";

import { Manager, MasterManager } from ".";

const hypot = (x: number, y: number): number => Math.sqrt(x * x + y * y);

const distance = (from: Coordinates, to: Coordinates): number =>
  hypot(from.x - to.x, from.y - to.y);

export class MouseManager extends Manager {
  private position: Coordinates;
  private mouseSpeed: number;

  public constructor(master: MasterManager, config: any) {
    super(master, config);

    this.mouseSpeed = 20;
    this.position = { x: 0, y: 0 };
  }

  public async click(): Promise<void> {
    const mouse = await this.getMouse();
    await mouse.down();
    await sleep(Math.round(random(60, 100)));
    await mouse.up();
  }

  public async moveToElement(elem: ElementHandle): Promise<void> {
    const page = await this.master.currentOrNewPage();
    const { x, y } = await page.evaluate((e): Coordinates => {
      const rect = e.getBoundingClientRect();
      return {
        x: rect.x + Math.round(rect.width / 2),
        y: rect.y + Math.round(rect.height / 2)
      };
    }, elem);
    await this.move({ x, y });
  }

  public async move(point: Coordinates): Promise<void> {
    const randSpeed = (random(this.mouseSpeed) / 2 + this.mouseSpeed) / 10;
    await this.humanWindMouse(
      this.position,
      point,
      7,
      5,
      10 / randSpeed,
      15 / randSpeed,
      10 * randSpeed
    );
    this.position.x = point.x;
    this.position.y = point.y;
  }

  private async getMouse(): Promise<Mouse> {
    return (await this.master.currentOrNewPage()).mouse;
  }

  private async humanWindMouse(
    from: Coordinates,
    to: Coordinates,
    gravity: number,
    wind: number,
    minWait: number,
    maxWait: number,
    targetArea: number
  ): Promise<void> {
    const mouse = await this.getMouse();

    let msp = this.mouseSpeed;
    let fromX = from.x;
    let fromY = from.y;
    let toX = to.x;
    let toY = to.y;

    const sqrt2 = Math.sqrt(2);
    const sqrt3 = Math.sqrt(3);
    const sqrt5 = Math.sqrt(5);

    const tDist = distance(from, to);
    const time = Date.now() + 10000;

    let maxStep = 0;
    let rCnc = 0;
    let d = 0;
    let dist = 0;
    let windX = 0;
    let windY = 0;
    let veloX = 0;
    let veloY = 0;
    let lastX = 0;
    let lastY = 0;
    let veloMag = 0;
    let randomDist = 0;

    while (true) {
      if (Date.now() > time) break;

      dist = hypot(fromX - toX, fromY - toY);
      wind = Math.min(wind, dist);
      if (dist < 1) dist = 1;

      d = Math.round(Math.round(tDist) * 0.3) / 7;
      if (d > 25) d = 25;
      if (d < 5) d = 5;

      rCnc = Math.round(random(6));
      if (rCnc === 1) d = Math.round(random(2, 3));

      if (d <= Math.round(dist)) {
        maxStep = d;
      } else {
        maxStep = Math.round(dist);
      }

      if (dist >= targetArea) {
        windX =
          windX / sqrt3 + (random(Math.round(wind) * 2 + 1) - wind) / sqrt5;
        windY =
          windY / sqrt3 + (random(Math.round(wind) * 2 + 1) - wind) / sqrt5;
      } else {
        windX /= sqrt2;
        windY /= sqrt2;
      }

      veloX += windX;
      veloY += windY;
      veloX += (gravity * (toX - fromX)) / dist;
      veloY += (gravity * (toY - fromY)) / dist;

      if (hypot(veloX, veloY) > maxStep) {
        randomDist = maxStep / 2 + random(Math.floor(Math.round(maxStep) / 2));
        veloMag = hypot(veloX, veloY);
        veloX = (veloX / veloMag) * randomDist;
        veloY = (veloY / veloMag) * randomDist;
      }

      lastX = Math.round(fromX);
      lastY = Math.round(fromY);
      fromX += veloX;
      fromY += veloY;

      if (lastX != Math.round(fromX) || lastY != Math.round(fromY)) {
        await mouse.move(Math.round(fromX), Math.round(fromY));
      }

      let w = random(Math.round(100 / msp)) * 6;
      if (w < 5) {
        w = 5;
      }
      w = Math.round(w * 0.9);
      await sleep(w);

      if (hypot(fromX - toX, fromY - toY) < 1) break;
    }

    if (
      Math.round(toX) != Math.round(fromX) ||
      Math.round(toY) != Math.round(fromY)
    ) {
      await mouse.move(Math.round(toX), Math.round(toY));
    }
  }
}
