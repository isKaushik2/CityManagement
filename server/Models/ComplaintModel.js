import mongoose, { Schema } from "mongoose";

const complaintSchema = new mongoose.Schema({
  category: String,
  location: String,
  evidence: Array,
  description: String,
  urgency: String,
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",   // 👈 important
    required: true
  }
});

const Complaint = mongoose.model("Complaints", complaintSchema)
export default Complaint