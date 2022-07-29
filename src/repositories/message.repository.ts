import { injectable } from "inversify";
import Message from "../db/models/message.model";
import { MessageInput, MessageOutput } from "../types/message.types";
import { IMessageRepository } from "./interfaces/IMessageRepository";

@injectable()
export class MessageRepository implements IMessageRepository {
  async create(message: any): Promise<any> {
    const { content, userId, channelId } = message;

    const newMessage = await Message.query().insert({
      content,
      userId,
      channelId,
    });

    return newMessage;
  }

  async findAll(): Promise<any> {
    const messages = await Message.query();
    return messages;
  }
}
