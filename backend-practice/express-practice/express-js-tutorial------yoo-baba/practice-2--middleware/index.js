import express from "express";
const app = express();


// error-handling middleware example:


app.get("/api/home", (req, res) => {
  console.log("API home executed!");
  res.send("<h1>API Home executed</h1>")
});


app.get("/api/about", (req, res) => {
  console.log("API 'about' executed!");
  res.send("<h1>API 'about' executed</h1>")
});


//  route error-handling middlware
// It is neccessary to use after the router handler / APIs
app.use((err, req, res, next)=>{
  console.log(err.stack)
  res.status(500).send(`${err.stack}`);
  next()
});

// 404 error
app.use((req, res)=> {
  res.status(404).send("<h1>404 error</h1>")
})


app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
