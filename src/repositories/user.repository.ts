import { injectable } from "inversify";
import User from "../db/models/user.model";
import { UserInput, UserOutput } from "../types/user.types";
import { IUserRepository } from "./interfaces/IUserRepository";

export async function create(user: any) {
  const { name, username, email, password } = user;

  const newUser = await User.query().insert({
    name,
    username,
    email,
    password,
  });

  return newUser;
}

export async function findAll() {
  const users = await User.query().withGraphFetched("message");
  return users;
}

export async function findOne(id: string) {
  const user = await await User.query()
    .findById(id)
    .withGraphFetched("message");
  return user;
}
