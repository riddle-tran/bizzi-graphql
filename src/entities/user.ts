import { Types } from "mongoose";

export type TProvider = "github";

export interface IUserBase {
  email: string;
  userName: string;
  avatarUrl: string;
  provide: TProvider;
  displayName: string;
}

export interface IUser extends IUserBase {
  id: Types.ObjectId;
}

export interface IAddUserParams extends IUserBase {}

export interface IUpdateUserParams extends Partial<IUser> {}

export interface IDeleteUserParams extends Pick<IUser, "id"> {}

export interface ICodeUserParams {
  code: string;
}
