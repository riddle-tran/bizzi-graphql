import { IContextGraphql } from "graph/interfaces";
import { createProductModel } from "database/productModel/utils";
import {
  ICreateProductParams,
  ICreateProductDataResponse,
} from "entities/product";

const createProduct = async (
  { name, price, description, thumbnail }: ICreateProductParams,
  { request, authentication }: IContextGraphql
) => {
  const user = await authentication(request);
  if (!user || !user.id || user.role !== "admin") {
    throw Error("Permission denied");
  }

  const doc = await createProductModel({
    name,
    price,
    description,
    thumbnail,
  });

  const data: ICreateProductDataResponse = {
    id: doc._id,
    name,
    price,
    description,
    thumbnail,
  };

  return {
    data: { ...data },
    ok: true,
    error: "",
  };
};

export default { createProduct };
