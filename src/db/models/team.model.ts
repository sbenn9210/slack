import { Model } from "objection";
import Channel from "./channel.model";
import Member from "./member.model";
import User from "./user.model";

export default class Team extends Model {
  name!: string;
  ownerId!: string;

  static tableName = "team";

  static jsonSchema = {
    type: "object",
    required: ["name", "ownerId"],
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      ownerId: { type: "string" },
    },
  };

  static relationMappings = () => ({
    member: {
      relation: Model.HasManyRelation,
      modelClass: Member,
      join: {
        from: "team.id",
        to: "member.teamId",
      },
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "team.ownerId",
        to: "user.id",
      },
    },
    channel: {
      relation: Model.HasOneRelation,
      modelClass: Channel,
      join: {
        from: "team.id",
        to: "channel.teamId",
      },
    },
  });
}
