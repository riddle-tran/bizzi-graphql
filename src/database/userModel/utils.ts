import { Types } from "mongoose";

import { UserModel } from "./schema";
import { IAddUserParams, IUser, IUserBase } from "entities/user";

export const getAllUsers = async (limit: number) => {
  return await UserModel.find({}).limit(limit);
};

export const getUserById = async (id: Types.ObjectId) => {
  return await UserModel.findById(id);
};

export const createUser = async ({
  email,
  provide,
  userName,
  avatarUrl,
  displayName,
}: IAddUserParams) => {
  return await UserModel.create({
    email,
    provide,
    userName,
    avatarUrl,
    displayName,
  });
};

export const updateUser = async ({
  id,
  email,
  provide,
  userName,
  avatarUrl,
  displayName,
}: IUser) => {
  const set: Partial<IUser> = {};
  if (email) set.email = email;
  if (provide) set.provide = provide;
  if (userName) set.userName = userName;
  if (avatarUrl) set.avatarUrl = avatarUrl;
  if (displayName) set.displayName = displayName;
  return await UserModel.findByIdAndUpdate(id, set);
};

export const createOrUpdateUser = async (user: IUserBase) => {
  const { email, provide } = user;
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  return await UserModel.findOneAndUpdate({ email, provide }, user, options);
};
