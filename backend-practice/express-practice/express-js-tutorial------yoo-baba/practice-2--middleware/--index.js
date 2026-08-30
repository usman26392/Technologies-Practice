import express from "express";
const app = express();
const router = express.Router()


// Router level middleware example:

// a custom global router middleware
// router.use((req, res, next)=> {
//   console.log("router-level middleware executed!");
//   next();
// });

const helloPrint = (req, res, next)=> {
  console.log("Hello Middleware executed!")
  next();
}

router.get("/home", (req, res) => {
  console.log("API home executed!");
  res.send("<h1>API Home executed</h1>")
});


router.get("/about", (req, res) => {
  console.log("API 'about' executed!");
  res.send("<h1>API 'about' executed</h1>")
});

// now call of router middlwware
app.use("/api", helloPrint, router);


app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
