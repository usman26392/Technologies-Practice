import mongoose from "mongoose";

// schema
const userSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: String,
});

// modal
export const userModel = mongoose.model("user", userSchema);
