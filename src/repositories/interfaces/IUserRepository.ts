import { UserInput, UserOutput } from "../../types/user.types";

export interface IUserRepository {
  create(input: UserInput): Promise<UserOutput>;
  findAll(): Promise<UserOutput[]>;
  findOne(id: string): Promise<UserOutput | undefined>;
}
