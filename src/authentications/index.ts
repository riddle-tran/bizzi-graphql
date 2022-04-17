import jwt from "jsonwebtoken";
import { Request } from "express";

import { IUser } from "entities/user";
import { getUserById } from "database/userModel/utils";
import { BIZZI_JWT_SECRET, BIZZI_JWT_EXP } from "configs";

export const generateAccessToken = (user: IUser) => {
  const timeExp = Date.now() + BIZZI_JWT_EXP;
  return jwt.sign({ ...user, exp: timeExp }, BIZZI_JWT_SECRET);
};

export const verifyAuth = async (req: Request) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    throw Error("Not found token");
  }
  const data = (await jwt.verify(token, BIZZI_JWT_SECRET)) as IUser;

  return getUserById(data.id);
};
