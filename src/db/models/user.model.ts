import { Model } from "objection";
import Member from "./member.model";
import Message from "./message.model";

export default class User extends Model {
  id!: string;
  name!: string;
  username!: string;
  email!: string;
  password!: string;

  static tableName = "user";

  static jsonSchema = {
    type: "object",
    required: ["name", "username", "email", "password"],
    properties: {
      id: { type: "string" },
      name: { type: "string", minLength: 1, maxLength: 255 },
      username: { type: "string", minLength: 1, maxLength: 255 },
      email: { type: "string", minLength: 1, maxLength: 255 },
      password: { type: "string", minLength: 1, maxLength: 255 },
    },
  };

  static relationMappings = () => ({
    message: {
      relation: Model.HasManyRelation,
      modelClass: Message,
      join: {
        from: "user.id",
        to: "message.userId",
      },
    },
    member: {
      relation: Model.HasManyRelation,
      modelClass: Member,
      join: {
        from: "user.id",
        to: "member.userId",
      },
    },
  });
}
