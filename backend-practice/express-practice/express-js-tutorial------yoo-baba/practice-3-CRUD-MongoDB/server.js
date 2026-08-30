import express from "express";
const app = express();
import mongoose from "mongoose";
import Contact from "./models/contact.model.js";

// Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/contact-crud")
  .then(() => console.log("Database connected successfully!"));

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
app.get("/", async (req, res) => {
  // res.render("home")
  // console.log(await Contact.find())
  // res.json(await Contact.find() ) // for APIs
  try {
    const contacts = await Contact.find();
    res.render("home", {
      contacts: contacts,
    });
  } catch (error) {
    console.log("Error fetching contacts:", error);
    res.status(500).send("Internal Server Error!");
  }
});

app.get("/show-contact/:id", async (req, res) => {
  // find a specific contact on base of database _id
  // const singleContact = await Contact.findOne({
  //   _id: req.params.id
  // });
  // OR by Mongoose
  const singleContact = await Contact.findById(req.params.id);

  res.render("show-contacts", { singleContact });
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/api/add-contact", (req, res) => {
  // const { first_name, last_name, email, phone, address } = req.body;
  // Contact.insertOne({first_name, last_name, email, phone, address});
  // OR Mongoose method
  Contact.create(req.body)
  res.redirect("/")
});

app.get("/edit-contact/:id", async (req, res) => {
  const singleContact = await Contact.findById(req.params.id);
  res.render("update-contact", { singleContact });
});

// This time post() method we are using for put purpose
// because of we dont have a PUT method in html form
app.post("/update-contact/:id", async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/")
});

// This time get() method we are using for the delete purpose
// because of we dont have a Delete methos in html form
app.get("/delete-contact/:id", async (req, res) => {
  await  Contact.findByIdAndDelete(req.params.id);
  res.redirect("/")
});



app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
