import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error in connecting DB : ", error);
    process.exit(1);
  }
};

export default connectDB;
