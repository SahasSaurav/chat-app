import type { Document, Model } from "mongoose";

export interface UserSchemaType extends Document {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  isAdmin: boolean;
}

export type UserModelType = Model<UserSchemaType>;