import "dotenv/config.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Not able to connect to db", error);
      throw error;
    });
    app.listen(3000, () => {
      console.log(`server is running at port :  3000`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !! ", err);
  });

// import express from "express";

// const app = express();
// console.log(process.env.MONGODB_URI);

// (async () => {
//   try {
//     console.log(process.env.MONGODB_URI);
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Not able to connect to db", error);
//       throw error;
//     });

//     app.listen(3000, () => {
//       console.log(`App is listening on port ${3000}`);
//     });
//   } catch (error) {
//     console.error("ERROR in connecting DB: ", error);
//     throw error;
//   }
// })();
