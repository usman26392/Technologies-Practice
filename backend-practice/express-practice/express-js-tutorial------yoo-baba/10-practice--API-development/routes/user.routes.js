import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

// Initialize dotenv BEFORE using any process.env variables
dotenv.config();
const router = express.Router();

router.post("/users/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const existingUser = await User.findOne({
      $or: [
        {
          userName,
        },
        {
          email,
        },
      ],
    });
    if (existingUser) {
      return res.status(400).json({
        message: "userName or email are already existed!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({userName});
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatachPassword = await bcrypt.compare(password, user.password);
    if (!isMatachPassword) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    // generating JSON Web token
    const tokenWithUser = jwt.sign(
      {
        userId: user._id,
        userName: user.userName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.json({ tokenWithUser });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });

  }
});

router.post("/users/logout", async (req, res) => {
    // we generally remove token from client's side storage like localStorage
    // This below code is just for understanding
    res.json({
        message: "Logged out successfully"
    })
});



export { router as userRoutes }; // named export