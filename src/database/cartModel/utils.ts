import { Types } from "mongoose";
import { ICart, ICartBase, IGetCartsRequestParams } from "entities/cart";

import { CartModel } from "./schema";

export const getCartsModel = async (queries: IGetCartsRequestParams) => {
  const { limit = 1000, ...rest } = queries;
  return await CartModel.find({ ...rest })
    .limit(limit)
    .populate("product");
};

export const getAllCartsModel = async (limit: number) => {
  return await CartModel.find({}).limit(limit);
};

export const getCartByIdModel = async (id: string) => {
  return await CartModel.findById(id);
};

export const createCartModel = async ({
  user,
  product,
  quantity,
}: ICartBase) => {
  return await CartModel.create({
    user,
    quantity,
    product,
  });
};

export const updateCartModel = async (
  id: string,
  { quantity }: Partial<ICart>
) => {
  const set: Partial<ICart> = {};
  if (quantity) set.quantity = quantity;
  return await CartModel.findByIdAndUpdate(id, set);
};

export const deleteCartModel = async (id: Types.ObjectId) => {
  return await CartModel.findByIdAndDelete(id);
};
