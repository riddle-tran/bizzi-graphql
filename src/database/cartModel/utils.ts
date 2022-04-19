import { ICart, ICartBase, IGetCartsRequestParams } from "entities/cart";

import { CartModel } from "./schema";

export const getCartsModel = async (queries: IGetCartsRequestParams) => {
  const { limit = 1000, ...rest } = queries;
  return await CartModel.find({ ...rest }).limit(limit);
};

export const getAllCartsModel = async (limit: number) => {
  return await CartModel.find({}).limit(limit);
};

export const getCartByIdModel = async (id: string) => {
  return await CartModel.findById(id);
};

export const createCartModel = async ({
  userId,
  quantity,
  productId,
}: ICartBase) => {
  return await CartModel.create({
    userId,
    quantity,
    productId,
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

export const deleteCartModel = async (id: string) => {
  return await CartModel.findByIdAndDelete(id);
};
