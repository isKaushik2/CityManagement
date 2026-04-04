import Complaint from "../Models/ComplaintModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const submitComplaint = async (req, res) => {
  try {
    const { category, location, description, urgency } = req.body;
    const files = req.files;
    let evidenceUrls = [];

    if (files && files.length > 0) {
      for (let file of files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "complaints",
        });

        evidenceUrls.push({
          url: result.secure_url,
          publicId: result.public_id,
        });
        fs.unlinkSync(file.path);
      }
    }
    const newComplaint = new Complaint({
      category,
      location,
      evidence: evidenceUrls,
      description,
      urgency,
      userID: req.user.id,
    });
    await newComplaint.save();

    return res.json({ message: "Complaint submitted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
