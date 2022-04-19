import { Schema, model } from "mongoose";

import { ICartBase } from "entities/cart";

const cartSchema = new Schema<ICartBase>(
  {
    // productId: {
    //   type: Types.ObjectId,
    //   required: true,
    // },
    quantity: {
      type: Number,
      required: true,
    },
    // userId: {
    //   type: Types.ObjectId,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

export const CartModel = model<ICartBase>("Carts", cartSchema);
