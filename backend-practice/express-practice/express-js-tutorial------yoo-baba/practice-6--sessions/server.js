import express from "express";
const app = express();
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import session from 'express-session';
import MongoStore from 'connect-mongo';

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

// Routes
// app.use("/", contactRouters);

// Only session middleware
// app.use(session({
//   secret: "@@abc@@",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {maxAge: 1000 * 60 * 60 * 24} // 1 day
// }))


// Only session middleware with database store
app.use(session({
  secret: "@@abc@@",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/testSessionDB',
      ttl: 14 * 24 * 60 * 60, // Session expiration time (optional: 14 days in seconds)
      autoRemove: 'native'    // Automatically deletes expired sessions from DB
    }),
}))



app.get("/", (req, res) => {
  req.session.username = "Usman"
  if(req.session.username) {
    return res.send(`Hello ${req.session.username}`)
  }
  return res.send("No username found in session")
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

// Database connection
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}!`);
//   });
// });
