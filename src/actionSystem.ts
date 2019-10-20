import { MasterManager } from "./managers";

export type Probability<T> = number | ((data: T) => number) | null;

export interface Action<T> {
  name: string;
  priority?: number;
  probability?: Probability<T>;
  alwaysFirst?: boolean;
  alwaysLast?: boolean;

  execute(master: MasterManager, data: T): Promise<T>;
}

interface ActionEntry<T> {
  name: string;
  priority: number;
  probability: Probability<T>;
  alwaysFirst: boolean;
  alwaysLast: boolean;

  execute(master: MasterManager, data: T): Promise<T>;
}

export class ActionSystem {
  public handlers: { [event: string]: ActionEntry<any>[] };

  private master: MasterManager;
  private defaultProbability: number;
  private defaultPriority: number;

  public constructor(master: MasterManager) {
    this.master = master;
    this.handlers = {};
    this.defaultProbability = 0;
    this.defaultPriority = 100;
  }

  public on(event: string, action: Action<any>): void {
    if (this.handlers[event] == null) this.handlers[event] = [];

    this.handlers[event].push({
      name: action.name,
      priority: action.priority || this.defaultPriority,
      probability: action.probability || this.defaultProbability,
      alwaysFirst: action.alwaysFirst || false,
      alwaysLast: action.alwaysLast || false,
      execute: action.execute
    });
  }

  public async emit(
    event: string,
    data: any,
    globalHandlers: ActionEntry<any>[]
  ): Promise<any> {
    if (globalHandlers == null) {
      globalHandlers = [];
    }
    
    const actions = (this.handlers[event] || [])
      .concat(globalHandlers)
      .sort((a, b): number => a.priority - b.priority); // TODO: maybe need fix.
    if (actions == null) return data;
    let first = true;

    for (const action of actions) {
      let probability = action.probability;

      if (action.probability instanceof Function) {
        probability = action.probability(data);
      }

      if (action.probability === null) {
        probability = this.defaultProbability;
      }

      if (
        Math.random() <= (probability as number) &&
        (first || !action.alwaysFirst)
      ) {
        data = await action.execute(this.master, data);
        if (action.alwaysLast) return data;
      }

      first = false;
    }

    return data;
  }
}
