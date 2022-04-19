import { Types } from "mongoose";

import { IUser } from "./user";
import { IProduct } from "./product";

export interface ICartBase {
  quantity: number;
  userId: IUser["id"];
  productId: IProduct["id"];
}

export interface ICart extends ICartBase {
  id: Types.ObjectId;
}

export interface TCreateCartRequestParams {
  quantity: number;
  productId: IProduct["id"];
}

export interface TCreateCartResponse extends ICart {}

export interface IGetCartsRequestParams extends Partial<ICart> {
  limit?: number;
}

export interface IGetCartsResponse {
  ok: boolean;
  error: string;
  data: ICart[];
}
