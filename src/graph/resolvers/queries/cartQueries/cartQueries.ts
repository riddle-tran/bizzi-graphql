import {
  ICart,
  IGetCartsResponse,
  IGetCartsRequestParams,
} from "entities/cart";
import { IContextGraphql } from "graph/interfaces";
import { getCartsModel } from "database/cartModel/utils";

const getCarts = async (
  params: IGetCartsRequestParams,
  { request, authentication }: IContextGraphql
): Promise<IGetCartsResponse> => {
  const user = await authentication(request);
  if (!user || !user.id) {
    throw Error("Permission denied");
  }
  const result = await getCartsModel({ ...params, userId: user.id });
  const carts: ICart[] = result.map((cart) => ({
    id: cart._id,
    quantity: cart.quantity,
    userId: cart.userId ?? "userId-Todo",
    productId: cart.productId ?? "productId-Todo",
  }));
  return {
    data: carts,
    error: "",
    ok: true,
  };
};

export default {
  getCarts,
};
