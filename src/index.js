import connectDB from "./db/index.js";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
// connectDB();

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://raivikash174:{password}R@cluster0.ghllcob.mongodb.net/${DB_NAME}`
    );
    app.on("error", (error) => {
      console.log("Not able to connect to db", error);
      throw error;
    });

    app.listen(3000, () => {
      console.log(`App is listening on port ${3000}`);
    });
  } catch (error) {
    console.error("ERROR in connecting DB: ", error);
    throw error;
  }
})();
