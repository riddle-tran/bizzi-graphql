import { ICart } from "entities/cart";
import { CartModel } from "./schema";

export const getAllCarts = async (limit: number) => {
  return await CartModel.find({}).limit(limit);
};

export const getCartById = async (id: string) => {
  return await CartModel.findById(id);
};

export const createCart = async ({
  name,
  price,
  quantity,
  thumbnail,
  description,
}: ICart) => {
  return await CartModel.create({
    name,
    price,
    quantity,
    thumbnail,
    description,
  });
};

export const updateCart = async (
  id: string,
  { name, price, thumbnail, description, quantity }: Partial<ICart>
) => {
  const set: Partial<ICart> = {};
  if (name) set.name = name;
  if (price) set.price = price;
  if (quantity) set.quantity = quantity;
  if (thumbnail) set.thumbnail = thumbnail;
  if (description) set.description = description;
  return await CartModel.findByIdAndUpdate(id, set);
};

export const deleteCart = async (id: string) => {
  return await CartModel.findByIdAndDelete(id);
};
