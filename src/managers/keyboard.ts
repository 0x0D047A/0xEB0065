import { random, sleep } from "../utils";

import { Manager } from ".";

export class KeyboardManager extends Manager {
  public async type(str: string): Promise<void> {
    const page = await this.master.currentOrNewPage();

    for (let c of Array.from(str)) {
      await sleep(Math.round(random(50, 150)));
      await page.keyboard.type(c);
    }
  }
  
  public async choseFromSelect(
      elementSelector, desiredNumber, reversed, value
  ) {
        
    const page = await this.master.currentOrNewPage();
    const element = await page.$(elementSelector);
    if (!value) {
        var chosenNumber =
            await page.evaluate(element => element.textContent, element);
    } else {
        var chosenNumber =
            await page.evaluate(element => element.value, element);
    }
    chosenNumber = Number(chosenNumber)
    
    if (chosenNumber == desiredNumber) { return true }
    
    if (chosenNumber < desiredNumber) {
        for (var i=chosenNumber; i<desiredNumber; i++) {
            await sleep(Math.round(random(100, 160)));
            await page.keyboard.press((reversed) ? 'ArrowUp' : 'ArrowDown');
        };
    } else {
        for (var i=chosenNumber; i>desiredNumber; i--) {
            await sleep(Math.round(random(100, 160)));
            await page.keyboard.press((reversed) ? 'ArrowDown' : 'ArrowUp');
        };
    }
    await sleep(Math.round(random(1000, 1600)));
    await page.keyboard.press('Enter');
  };
}
