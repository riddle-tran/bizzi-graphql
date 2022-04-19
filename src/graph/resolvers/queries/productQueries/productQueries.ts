import {
  IProduct,
  IGetProductResponse,
  IGetProductRequestParams,
} from "entities/product";
import { getProductsModel } from "database/productModel/utils";

const getProducts = async (
  params: IGetProductRequestParams
): Promise<IGetProductResponse> => {
  const result = await getProductsModel(params);
  const products: IProduct[] = result.map((product) => ({
    id: product._id,
    name: product.name,
    price: product.price,
    thumbnail: product.thumbnail,
    description: product.description,
  }));
  return {
    data: products,
    error: "",
    ok: true,
  };
};

export default {
  getProducts,
};
