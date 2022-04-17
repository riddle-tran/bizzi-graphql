import { Request, Response } from "express";

export interface IContextGraphql {
  request: Request;
  response: Response;
  authentication: (request: Request) => void;
}
