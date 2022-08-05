export interface MessageInput {
  content: string;
  userId: string;
  channelId: string;
}

export interface MessageOutput extends MessageInput {
  createdAt: Date;
  updatedAt: Date;
}
