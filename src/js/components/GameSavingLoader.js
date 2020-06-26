import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const response = await read();
      const value = await json(response);
      const result = new GameSaving(value);
      return result;
    } catch (error) {
      return error;
    }
  }
}
