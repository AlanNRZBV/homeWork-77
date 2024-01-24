export interface IMessage {
  author: string;
  message: string;
  id: string;
  image: File | null
}

export type MessageData = Omit<IMessage, 'date', 'id'>;
