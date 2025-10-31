import mongoose from "mongoose";

const mentorshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  skills: [{ type: String }],
  status: { type: String, enum: ["open", "closed"], default: "open" },
});

export default mongoose.model("Mentorship", mentorshipSchema);
