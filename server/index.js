import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import AuthRouter from "./Routes/AuthRouter.js";
import UserRouter from "./Routes/UserRouter.js";
import eventRoute from "./Routes/eventRoute.js";
import volunteerRoute from "./Routes/volunteerRoute.js";
import log from "./Middlewares/logger.js";

const PORT = process.env.PORT;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error connecting to database ${err}`));

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.ALLOWED_ORIGIN,
  }),
);
app.use(log);

app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/api", eventRoute);
app.use("/app", volunteerRoute);

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});
