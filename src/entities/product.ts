import { Types } from "mongoose";
export interface IProductBase {
  name: string;
  price: number;

  // Optional
  thumbnail?: string;
  description?: string;
}

export interface IProduct extends IProductBase {
  id: Types.ObjectId;
}

export interface ICreateProductParams extends IProductBase {}

export interface ICreateProductDataResponse extends IProduct {}

export interface IGetProductRequestParams extends Partial<IProduct> {
  limit?: number;
}

export interface IGetProductResponse {
  ok: boolean;
  error: string;
  data: IProduct[];
}
