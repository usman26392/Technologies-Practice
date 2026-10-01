import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

// an authentication middleware
const auth = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != "undefined") {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];
      // verify token
      const user = jwt.verify(token, process.env.JWT_SECRET);
      console.log(user);
      req.token = user;
      next();
    } else {
      return res.status(401).json({
        message: "No token provided!",
      });
    }
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token!",
    });
  }
};

export default auth;