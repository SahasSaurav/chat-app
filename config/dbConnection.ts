import { connect } from "mongoose";

import type {ConnectionOptionsType} from './types'

const connectDB = async () => {
  try {
    const connectionOption = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    } as ConnectionOptionsType;
    const dbUri = process.env.MONGO_DB_URI  as string 
    const dbConnection = await connect(dbUri, connectionOption);
    console.info(`MongoDB Connected: ${dbConnection?.connection?.host}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error in mongo db conection: ${err?.message}`);
    } else {
      console.error(`Unkown error in mongo db: ${err}`)
    }
    process.exit();
  }
};

export { connectDB };
