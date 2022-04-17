import { IProduct } from "database/productModel";

export interface ICart extends IProduct {
  quantity: number;
}
