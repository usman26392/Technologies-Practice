import express from "express";
const app = express();
import contactRouters from "./routes/contact.routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import { body, validationResult } from "express-validator";




dotenv.config(); // make accessible from .env file
const PORT = process.env.PORT



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


let validationRules = [
  body("username")
  .notEmpty().withMessage("Username is required")
  .isLength({min: 5}).withMessage("Username must be at least 5 characters long")
  .trim().isAlpha().withMessage("Username must contain only letters")
  .custom((value)=> {
    if(value.toLowerCase() === "admin") {
      throw new Error("Username cannot be admin")
    }
    return true;
  }),

  body("email").isEmail().normalizeEmail().withMessage("Please enter a valid email address"),
  body("password").isLength({min: 5, max: 15}).withMessage("Password must be between 5 and 15 characters long.")
  .isStrongPassword().withMessage("Password must be strong"),

  body("age").isNumeric().withMessage("Age must be a number")
  .isInt({min: 18, max: 40}).withMessage("Age must be between 18 and 40"),

  body("country").isIn(["pakistan", "india", "america"]).withMessage("Country must be one of the following: Pakistan, India, America") ,
]


app.get("/my-form", (req, res)=> {
  res.render("myForm", {
    errors: []
  });
});

app.post("/my-form", validationRules, (req, res)=> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // 💡 Added 'return' here so execution stops after rendering the errors
    return res.render("myForm", {
      errors: errors.array()
    });
  }
  // res.send(req.body);
   res.render("myForm", {
    errors: errors.array()
  })
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});



// Database connection
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}!`);
//   });
// });