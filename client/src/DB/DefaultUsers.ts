import type { User } from "../Type";
import { v4 as uuidv4 } from "uuid";

export const defaultUser: User[] = [
  {
    userId: uuidv4(),
    userName: "adir",
    password: "aaaaaaaaaaaaaaa",
    email: "2",
  },
  {
    userId: uuidv4(),
    userName: "haim",
    password: "aaaaaaaaaaaaaaa",
    email: "2",
  },
];
