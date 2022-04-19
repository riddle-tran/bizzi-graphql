import { Schema, model } from "mongoose";

import { IProductBase } from "entities/product";

const productSchema = new Schema<IProductBase>(
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

export const ProductModel = model<IProductBase>("Products", productSchema);
