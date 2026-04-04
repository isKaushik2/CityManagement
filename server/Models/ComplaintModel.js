import mongoose, { Schema } from "mongoose";

const evidenceSchema = new Schema(
  { url: String, publicId: String },
  { _id: false }
);

const complaintSchema = new mongoose.Schema({
  category: String,
  location: String,
  evidence: [evidenceSchema],
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