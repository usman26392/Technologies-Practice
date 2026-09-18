import express from "express";
const app = express();
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
import User from "./models/user.model.js";
import cookieParser from 'cookie-parser';
import csrf from 'csurf';


dotenv.config(); // make accessible from .env file
const PORT = process.env.PORT;

// Example: setup ejs:
app.set("view engine", "ejs");
// app.set("views", "./ejs-templates"); // for custom views folder

app.use(express.json());

// a middlewares
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.static("public"));
app.use(cookieParser())


const csrfProtection = csrf({
  cookie: true
});




app.get("/", (req, res) => {
  res.send("Home page")
})

app.get("/myform", csrfProtection, (req, res) => {
  res.render("form", {
    csrfToken: req.csrfToken()
  })
})

app.post("/submit", csrfProtection, (req, res) => {
  res.send(req.body)
})










app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

// // Database connection
// connectDB().then(() => {
// });
