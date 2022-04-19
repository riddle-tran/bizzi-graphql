import { Types } from "mongoose";

export type TProvider = "github";

export type TRole = "user" | "admin";

export interface IUserBase {
  userName: string;
  avatarUrl: string;
  provide: TProvider;

  // Optional
  role?: TRole;
  token?: string;
  email?: null | string;
  displayName?: null | string;
}

export interface IUser extends IUserBase {
  id: Types.ObjectId;
}

export interface ICodeUserParams {
  code: string;
}
