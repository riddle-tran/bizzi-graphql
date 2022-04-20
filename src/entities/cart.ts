import { Types } from "mongoose";

import { IUser } from "./user";
import { IProduct } from "./product";

export interface ICartBase {
  quantity: number;
  user: Types.ObjectId | IUser;
  product: Types.ObjectId | IProduct;
}

export interface ICart extends ICartBase {
  id: Types.ObjectId;
}

export interface TCreateCartRequestParams {
  quantity: number;
  productId: Types.ObjectId;
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

export interface TDeleteCartRequestParams {
  id: Types.ObjectId;
}

export interface TDeleteCartResponse {
  ok: boolean;
  error: string;
}
