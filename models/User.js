import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["mentee", "mentor", "organization", "admin"], default: "mentee" },
  interests: [String],
  skills: [String],
});

export default mongoose.model("User", userSchema);
