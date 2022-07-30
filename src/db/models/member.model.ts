import { Model } from "objection";
import User from "./user.model";

export default class Member extends Model {
  id!: string;
  teamId!: string;
  userId!: string;

  static tableName: "member";

  static jsonSchema = {
    type: "object",
    required: ["teamId", "userId"],
    properties: {
      id: { type: "string" },
      teamId: { type: "string" },
      userId: { type: "string" },
    },
  };

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "member.userId",
        to: "user.id",
      },
    },
  });
}
