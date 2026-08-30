import express from "express";
const app = express();




// Example: setup ejs:
app.set("view engine", "ejs");
// app.set("views", "./ejs-templates"); // for custom views folder

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "My EJS Page",
//     message: "Hello, this is a message from the server!",
//     items: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
//     users:[
//       {
//         name: "Usman",
//         age: 25,
//         email: "usman@example.com"
//       },
//       {
//         name: "Fahad ali",
//         age: 22,
//         email: "fahad@example.com"
//       },
//     ]
//   });
// });



// Form handling example:
// a middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("form", {
    message: null,
  });
});

app.post("/api/submit", (req, res) => {
  const {userName} = req.body;
  console.log("Form submitted", userName);

  res.render("form", {
    message: "Form submitted successfully! Thank you " + userName,
  });
});

app.get("/about-us", (req, res)=> {
  res.render("about-us");
})
















app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
