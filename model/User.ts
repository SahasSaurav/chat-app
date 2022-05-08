import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

import type{ UserSchemaType, UserModelType } from "./type";

const UserSchema = new Schema<UserSchemaType, UserModelType>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: true,
    },
    avatar: {
      type: "String",
      required: false,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// UserSchema.pre("save", async (next) => {
//   if (!this.isModified) { 
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

UserSchema.methods.isValidPassword = async function (enteredPassword: string | Buffer, userPassword:string) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

const User = model<UserSchemaType ,UserModelType>("User", UserSchema);

export { User };
