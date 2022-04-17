import { Schema, model } from "mongoose";

import { IProduct } from "entities/product";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
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

export const ProductModel = model<IProduct>("Products", productSchema);
