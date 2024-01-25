
export interface IMessage {
  message: string;
  author: string;
  id?: string;
  image: File | null
}

export type MessageWithoutId = Omit<IMessage, "id">

export interface IMessages {
  messages: IMessage[]
}