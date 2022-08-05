import { Model } from "objection";
import Message from "./message.model";
import Team from "./team.model";

export default class Channel extends Model {
  id!: string;
  name!: string;
  teamId!: string;
  public!: boolean;

  static tableName = "channel";

  static jsonSchema = {
    type: "object",
    required: ["name", "teamId", "public"],
    properties: {
      id: { type: "string" },
      name: { type: "string", minLength: 1, maxLength: 255 },
      teamId: { type: "string" },
      public: { type: "boolean" },
    },
  };

  static relationMappings = () => ({
    team: {
      relation: Model.BelongsToOneRelation,
      modelClass: Team,
      join: {
        from: "channel.teamId",
        to: "team.id",
      },
    },
    message: {
      relation: Model.HasManyRelation,
      modelClass: Message,
      join: {
        from: "channel.id",
        to: "message.channelId",
      },
    },
  });
}
