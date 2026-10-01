import express from "express";
const app = express();
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
import User from "./models/student.model.js";
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from 'url';
import {studentRoutes} from "./routes/student.routes.js"
import multer from "multer";
import { userRoutes } from "./routes/user.routes.js";
import auth from "./middleware/auth.js";

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); // make accessible from .env file
const PORT = process.env.PORT;


//  middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.static("public"));
// Remove the "./" from the URL prefix, and match the physical folder structure
app.use('/public/uploads', express.static(path.join(__dirname, 'public', 'uploads')));
app.use(cors())


app.use("/api", userRoutes);
app.use(auth);
app.use("/api", studentRoutes);



// This MUST be placed after all your routes/routers
app.use((err, req, res, next) => {
  // Catch Multer-specific errors (like limit exceedances)
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ 
      error: 'File upload error', 
      details: err.message 
    });
  }
  
  // Catch standard application errors
  if (err) {
    return res.status(500).json({ 
      error: 'Internal server error', 
      details: err.message 
    });
  }
  
  next();
});




// Database connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });
});
