import { IProduct } from "entities/product";
import { ProductModel } from "./schema";

export const getAllProducts = async (limit: number) => {
  return await ProductModel.find({}).limit(limit);
};

export const getProductById = async (id: string) => {
  return await ProductModel.findById(id);
};

export const createProduct = async ({
  name,
  price,
  thumbnail,
  description,
}: IProduct) => {
  return await ProductModel.create({ name, price, thumbnail, description });
};

export const updateProduct = async (
  id: string,
  { name, price, thumbnail, description }: Partial<IProduct>
) => {
  const set: Partial<IProduct> = {};
  if (name) set.name = name;
  if (price) set.price = price;
  if (thumbnail) set.thumbnail = thumbnail;
  if (description) set.description = description;
  return await ProductModel.findByIdAndUpdate(id, set);
};

export const deleteProduct = async (id: string) => {
  return await ProductModel.findByIdAndDelete(id);
};
