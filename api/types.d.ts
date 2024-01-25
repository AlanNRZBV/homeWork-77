export interface IMessage {
  author: string;
  message: string;
  id: string;
  image: string | null
}

export type MessageData = Omit<IMessage, 'date', 'id'>;
