import express from "express";
const app = express();
import contactRouters from "./routes/contact.routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv"



dotenv.config(); // make accessible from .env file

const PORT = process.env.PORT



// Example: setup ejs:
app.set("view engine", "ejs");
// app.set("views", "./ejs-templates"); // for custom views folder

// a middlewares
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.static("public"));

// Routes
app.use("/", contactRouters);



// Database connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });
});