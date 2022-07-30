import { Model } from "objection";
import Channel from "./channel.model";
import User from "./user.model";

export default class Message extends Model {
  id!: string;
  content!: Text;
  userId!: string;
  channelId!: string;

  static tableName = "message";

  static jsonSchema = {
    type: "object",
    required: ["content", "userId", "channelId"],
    properties: {
      id: { type: "string" },
      content: { type: "string" },
      userId: { type: "string" },
      channelId: { type: "string" },
    },
  };

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "message.userId",
        to: "user.id",
      },
    },
    channel: {
      relation: Model.BelongsToOneRelation,
      modelClass: Channel,
      join: {
        from: "message.channelId",
        to: "channel.id",
      },
    },
  });
}
