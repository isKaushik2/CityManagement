import Complaint from "../Models/ComplaintModel.js";

export const submitComplaint = async (req, res) => {
  try {
    const { category, location, evidence, description, urgency } = req.body;
    const newComplaint = new Complaint({
      category,
      location,
      evidence,
      description,
      urgency,
      userID: req.user.id
    });
    await newComplaint.save();
    
    return res.json({ message: "Complaint submitted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
