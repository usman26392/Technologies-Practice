import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";

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

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  // console.log(token)

  res.cookie("tokenUser", token);

  res.status(201).json({
    message: "User register successfully",
    user,
  });
}
