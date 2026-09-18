import express from "express";
const app = express();
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
import User from "./models/user.model.js";

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

// session middleware
app.use(session({
  secret: "@@123@@",
  resave: false,
  saveUninitialized: false,

}))

// middleware to check if user is logged in
const checkLoggedIn = (req, res, next)=> {
  if(req.session.userEmail) {
    next()
  }
  else {
   res.redirect("login");
  }
}

app.get("/", checkLoggedIn, (req, res) => {
  console.log(req.session.userEmail)
  res.send(`
    Hello World! Hello 
    ${req.session.userEmail}
    and <a href="/logout">Logout</a>
    `);

});

app.get("/login", (req, res)=> {
  if(req.session.userEmail) {
    res.redirect("/")
  } else {
    res.render("login-form", {
      error: null
    })
  }
})

app.get("/register", (req, res)=> {
  res.render("register-form", {
    error: null
  })
})

app.post("/register", async (req, res)=> {
  const { email, password } = req.body;
  // console.log("email:", email,"\n","password",  password);

  const hasedPassword = await bcrypt.hash(password, 10);
  // console.log("hasedPassword:", hasedPassword);

  await User.create({
    email,
    password: hasedPassword
  })
  res.redirect("/login");
})


app.post("/login", async (req, res)=> {
  const { email, password } = req.body;
  // console.log("email:", email,"\n","password",  password);

  const user = await User.findOne({email})
  if(!user) {
    return res.render("login-form", {
      error: "User not found"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    return res.render("login-form", {
      error: "Invalid password"
    })
  }

  // session
  req.session.userEmail = user.email;

  res.redirect("/")

  
})


app.get("/logout", (req, res)=> {
  req.session.destroy(()=> {
    res.redirect("login");
    
  });
})



// Database connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });
});
