import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import connectDB from "./db/index.js";

import { app } from "./app.js";
connectDB()
  .then(() => {
    app.listen(8080, () => {
      console.log("Master is here");
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed", err);
  });
