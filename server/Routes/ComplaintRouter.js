import express from "express"
import { submitComplaint } from "../Controllers/ComplaintController.js";
import { upload } from "../Middlewares/multer.middleware.js";
import checkToken from "../Middlewares/checkToken.js";

const router = express.Router();

router.post("/submit", checkToken, upload.array("evidence", 5), submitComplaint);

export default router;