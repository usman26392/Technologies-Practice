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

// app.use(cookieParser());
app.use(cookieParser("@@secretkey@@"));

app.get("/", (req, res)=> {
  // const user = req.cookies.username;
  const user = req.signedCookies.username;

  res.send(`Cookie! Username: ${user}`)
});

app.get("/set-cookie", (req, res)=> {
  res.cookie("username", "Rehan", {
    maxAge: 900000, // 15 minutes 
    httpOnly: true,
    // signed: false
    signed: true
  })
  res.send("Cookie has been set!")
})

app.get("/get-cookie", (req, res)=> {
  // const user = req.cookies.username;
  const user = req.signedCookies.username;

  if(!user) {
    return res.send("No cookie found!")
  }
  res.send(`Cookie found! Username: ${user}`)
});


app.get("/delete-cookie", (req, res)=> {
   res.clearCookie("user");
   res.send("Cookie has been deleted!")
})





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

// // Database connection
// connectDB().then(() => {
// });
