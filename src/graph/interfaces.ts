import { IUser } from "entities/user";
import { Request, Response } from "express";

export interface IContextGraphql {
  request: Request;
  response: Response;
  authentication: (request: Request) => Promise<IUser | null>;
}
