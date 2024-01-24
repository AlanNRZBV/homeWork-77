export interface IMessage {
  author: string;
  message: string;
  id: string;
}

export type MessageData = Omit<IMessage, 'date', 'id'>;
