import { IProductBase, IGetProductRequestParams } from "entities/product";

import { ProductModel } from "./schema";

export const getProductsModel = async (queries: IGetProductRequestParams) => {
  const { limit = 1000, ...rest } = queries;
  return await ProductModel.find({ ...rest }).limit(limit);
};

export const getProductById = async (id: string) => {
  return await ProductModel.findById(id);
};

export const createProductModel = async ({
  name,
  price,
  thumbnail,
  description,
}: IProductBase) => {
  return await ProductModel.create({ name, price, thumbnail, description });
};

export const updateProductModel = async (
  id: string,
  { name, price, thumbnail, description }: Partial<IProductBase>
) => {
  const set: Partial<IProductBase> = {};
  if (name) set.name = name;
  if (price) set.price = price;
  if (thumbnail) set.thumbnail = thumbnail;
  if (description) set.description = description;
  return await ProductModel.findByIdAndUpdate(id, set);
};

export const deleteProductModel = async (id: string) => {
  return await ProductModel.findByIdAndDelete(id);
};
