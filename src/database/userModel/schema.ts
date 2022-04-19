import { Schema, model } from "mongoose";

import { IUser } from "entities/user";

const userSchema = new Schema<IUser>(
  {
    // Required
    userName: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    provide: {
      type: String,
      required: true,
    },

    // Optional
    email: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    token: {
      type: String,
    },
    displayName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("User", userSchema);
