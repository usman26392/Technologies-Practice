import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function userRegister(req, res) {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body is missing",
    });
  }

  const { userName, email, password, role = "user" } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({
      message: "userName, email, and password are required",
    });
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ userName }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "user already exists!",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    userName,
    email,
    password: hash,
    role,
  });

  const token = jwt.sign(
    {
      id: newUser._id,
      role: newUser.role,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("userToken", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser._id,
      userName: newUser.userName,
      email: newUser.email,
      role: newUser.role,
    },
  });
}

export async function loginUser(req, res) {
  if (!req.body) {
    return res.status(400).json({
      message: "Request body is missing",
    });
  }

  const { userName, email, password } = req.body;

  if (!userName && !email) {
    return res.status(400).json({
      message: "userName or email is required",
    });
  }

  if (!password) {
    return res.status(400).json({
      message: "password is required",
    });
  }

  const newUser = await userModel.findOne({
    $or: [{ userName }, { email }],
  });

  if (!newUser) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, newUser.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: newUser._id,
      role: newUser.role,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("userToken", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: newUser._id,
      userName: newUser.userName,
      email: newUser.email,
      role: newUser.role,
    },
  });
}

export async function logoutUser(req, res) {
  res.clearCookie("userToken");
  res.status(200).json({
    message: "User logged out successfully!"
  });
}



