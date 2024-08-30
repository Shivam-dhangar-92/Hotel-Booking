import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.get("/", (req, res) => {
  res.send("Here we go ");
});

import listingRouter from "./routes/listings.route.js";

app.use("/api/v4/listings", listingRouter);

export { app };
