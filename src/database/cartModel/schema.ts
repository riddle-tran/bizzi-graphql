import { Schema, model } from "mongoose";

import { ICartBase } from "entities/cart";
import { UserModel } from "database/userModel";
import { ProductModel } from "database/productModel";

const cartSchema = new Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: ProductModel,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CartModel = model<ICartBase>("Carts", cartSchema);
