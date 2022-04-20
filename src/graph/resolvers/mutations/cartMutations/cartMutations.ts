import { IContextGraphql } from "graph/interfaces";
import { createCartModel, deleteCartModel } from "database/cartModel/utils";
import {
  TCreateCartResponse,
  TDeleteCartResponse,
  TDeleteCartRequestParams,
  TCreateCartRequestParams,
} from "entities/cart";

const createCart = async (
  { productId, quantity }: TCreateCartRequestParams,
  { request, authentication }: IContextGraphql
) => {
  const user = await authentication(request);
  if (!user || !user.id) {
    throw Error("Permission denied");
  }

  const doc = await createCartModel({
    quantity,
    user: user.id,
    product: productId,
  });

  const data: TCreateCartResponse = {
    id: doc._id,
    quantity,
    user: user.id,
    product: productId,
  };

  return {
    data: { ...data },
    ok: true,
    error: "",
  };
};

const deleteCart = async (
  { id }: TDeleteCartRequestParams,
  { request, authentication }: IContextGraphql
): Promise<TDeleteCartResponse> => {
  const user = await authentication(request);
  if (!user || !user.id) {
    throw Error("Permission denied");
  }

  await deleteCartModel(id);

  return {
    ok: true,
    error: "",
  };
};

export default { createCart, deleteCart };
