import { Schema, model } from "mongoose";

import { ICart } from "entities/cart";

const cartSchema = new Schema<ICart>(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    // Optional
    thumbnail: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const CartModel = model<ICart>("Carts", cartSchema);
