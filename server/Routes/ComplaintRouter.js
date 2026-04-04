import express from "express"
import { submitComplaint } from "../Controllers/ComplaintController.js";
import checkToken from "../Middlewares/checkToken.js";

const router = express.Router();

router.post("/submit", checkToken, submitComplaint);

export default router;