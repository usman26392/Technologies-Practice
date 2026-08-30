import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import registrationValidationRules from "./middleware/validation.middleware.js";

export const app = express();
// middlewrares
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // we will be able to set token in Browser cookies.

app.get("/", (req, res) => {
  res.status(500).json({
    message: "Hello world!",
  });
});

app.post("/register", registrationValidationRules, (req, res) => {
  const { username, email, password } = req.body;

  res.status(201).json({
    message: "User registered successfully",
    user: {
      username,
      email
    }
  })
});

// Only start server if this file is run directly, not when imported for testing
// if (import.meta.url === `file://${process.argv[1]}`) {
//   app.listen(3000, () => {
//     console.log("Server is running on PORT 3000");
//   });
// }


// here server will start directly
app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});