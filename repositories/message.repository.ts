import Message from "../db/models/message.model";

export async function create(message: any) {
  const { content, userId, channelId } = message;

  const newMessage = await Message.query().insert({
    content,
    userId,
    channelId,
  });

  return newMessage;
}

export async function findAll() {
  return await Message.query();
}

export async function findMessagesByUser(id: string) {
  return await Message.query().where('userId', id);
}
