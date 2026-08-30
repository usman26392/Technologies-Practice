import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// User Registration
export async function userRegister(req, res) {
  // Check before creating user
  const existingUser = await userModel.findOne({
    email: req.body.email,
  });

  if (existingUser) {
    return res.status(400).json({ message: "Email already registered" });
  }

  const { userName, email, password } = req.body;
  const user = await userModel.create({
    userName,
    email,
    password,
  });

  // Generate JWT token for the registered user
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h", // Token expires in 1 hour
    }
  );

  // console.log(token)

  res.cookie("tokenUser", token);

  res.status(201).json({
    message: "User register successfully",
    user,
  });
}
