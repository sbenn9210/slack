export interface UserInput {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface UserOutput extends Omit<UserInput, "password"> {
  id: string;
  name: string;
  username: string;
  email: string;
}
