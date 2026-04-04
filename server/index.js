import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import AuthRouter from "./Routes/AuthRouter.js"
import UserRouter from "./Routes/UserRouter.js"
<<<<<<< HEAD
import ComplaintRouter from "./Routes/ComplaintRouter.js"
=======
import DonorRouter from "./Routes/DonorRoutes.js";
>>>>>>> 904458ffb902e6588c3e75c1a36ec356407ae54a
import log from "./Middlewares/logger.js";

const PORT = process.env.PORT;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error connecting to database ${err}`));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.ALLOWED_ORIGIN,
  }),
);
app.use(log);

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);
<<<<<<< HEAD
app.use('/complaint', ComplaintRouter);
=======
app.use('/donors', DonorRouter);
>>>>>>> 904458ffb902e6588c3e75c1a36ec356407ae54a

app.get("/", (req, res) => {
    res.send("Hello, world");
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}`);
})