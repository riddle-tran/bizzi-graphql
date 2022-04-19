import { Types } from "mongoose";

import { UserModel } from "./schema";
import { IUser, IUserBase } from "entities/user";

export const getAllUsers = async (limit: number) => {
  return await UserModel.find({}).limit(limit);
};

export const getUserById = async (id: Types.ObjectId) => {
  return await UserModel.findById(id);
};

export const removeTokenById = async (id: Types.ObjectId) => {
  return await UserModel.updateOne({ _id: id }, { $unset: { token: 1 } });
};

export const updateUser = async (
  id: Types.ObjectId,
  { token, email, provide, userName, avatarUrl, displayName }: Partial<IUser>
) => {
  const set: Partial<IUser> = {};
  if (email) set.email = email;
  if (token) set.token = token;
  if (provide) set.provide = provide;
  if (userName) set.userName = userName;
  if (avatarUrl) set.avatarUrl = avatarUrl;
  if (displayName) set.displayName = displayName;
  return await UserModel.findByIdAndUpdate(id, { $set: set }, { new: true });
};

export const createOrUpdateUser = async (user: IUserBase) => {
  const { userName, provide } = user;
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  return await UserModel.findOneAndUpdate({ userName, provide }, user, options);
};
