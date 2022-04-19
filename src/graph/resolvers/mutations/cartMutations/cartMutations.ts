import { IContextGraphql } from "graph/interfaces";
import { createCartModel } from "database/cartModel/utils";
import { TCreateCartRequestParams, TCreateCartResponse } from "entities/cart";

const createCart = async (
  { productId, quantity }: TCreateCartRequestParams,
  { request, authentication }: IContextGraphql
) => {
  const user = await authentication(request);
  if (!user || !user.id) {
    throw Error("Permission denied");
  }

  const doc = await createCartModel({
    productId,
    quantity,
    userId: user.id,
  });

  const data: TCreateCartResponse = {
    id: doc._id,
    productId,
    quantity,
    userId: user.id,
  };

  return {
    data: { ...data },
    ok: true,
    error: "",
  };
};

export default { createCart };
