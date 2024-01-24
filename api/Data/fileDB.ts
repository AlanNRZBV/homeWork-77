import { promises as fs } from 'fs';
import { IMessage, MessageData } from '../types';
const fileName = './Data/messages/db.json';

let data: IMessage[] = [];

export const fileDB = {
  async init() {
    try {
      console.log('catalog: ', process.cwd());
      const fileContents = await fs.readFile(fileName);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      console.log('Caught on try - INITIALIZE DATA BASE - ', e);
      data = [];
    }
  },
  async getItems() {
    return data.slice(-30);
  },
  async addItem(item: MessageData) {

    const id = crypto.randomUUID();

    const message: IMessage = {
      author: item.author,
      message: item.message,
      id: id,
    };

    data.push(message);
    await this.save();

    return message;
  },
  async save() {
    return fs.writeFile(fileName, JSON.stringify(data));
  },
};
