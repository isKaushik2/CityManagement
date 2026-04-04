import express from "express";
import checkToken from "../Middlewares/checkToken.js";
import {
  registerDonor,
  getDonors,
  getBloodGroupCounts,
  getMyDonorProfile,
} from "../Controllers/DonorController.js";

const router = express.Router();

router.get("/",        checkToken, getDonors);
router.post("/",       checkToken, registerDonor);
router.get("/counts",  checkToken, getBloodGroupCounts);
router.get("/me",      checkToken, getMyDonorProfile);

export default router;