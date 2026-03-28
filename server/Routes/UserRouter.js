import { getProfile } from "../Controllers/UserController.js"
import express from "express"
import checkToken from "../Middlewares/checkToken.js";

const router = express.Router();

router.get("/profile", checkToken, getProfile);

export default router