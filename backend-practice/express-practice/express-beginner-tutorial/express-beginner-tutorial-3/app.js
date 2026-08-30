const express = require("express");
const path = require("path");
const engine = require("ejs-mate");




const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");

app.engine("ejs", engine);


// Set views directory
app.set("views", path.join(__dirname, "Views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("pages/home", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About Us" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});