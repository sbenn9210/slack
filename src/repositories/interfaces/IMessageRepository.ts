import { MessageInput, MessageOutput } from "../../types/message.types";

export interface IMessageRepository {
  create(input: any): Promise<any>;
  findAll(): Promise<any>;
}
