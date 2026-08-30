import express from "express";
const app = express();

// Related to HTTP request properties and methods of express.js


// a global middleware: implement all the route handler
app.use(express.json());
 // Now APIs can accept JSON data in the request body. This middleware is essential for handling requests that send data in JSON format, such as POST request from a client-side form submission. It allows the server to parse (convert) the incoming JSON data and make it accessible in the request handler, enabling developers to work with the data easily.
 // Middleware to parse JSON request bodies i.e  // parse JSON request bodies means that the server can understand and process incoming requests that contain data in JSON format. When a client sends a request with a JSON payload, this middleware will automatically parse the JSON data and make it available in the req.body object of the request handler. This allows developers to easily access and manipulate the data sent by clients in their API endpoints.
// parse means: to analyze and convert data into a format that can be easily understood and processed by the server. In this case, it means converting the JSON data sent by the client into a JavaScript object that can be used in the server's code.


// a global middleware: implement all the route handler
app.use(express.urlencoded({ extended: true}));
// Now APIs can too accept URL-encoded ( application/x-www-form-urlencoded ) data in the request body.


// a custom global middleware
const helloPrint = (req, res, next)=> {
  console.log("Hello Middleware executed!")
  next();
}

// a custom global middleware
const helloPrint2 = (req, res, next)=> {
  console.log("Hello Middleware 2 executed!");
  next();
}

// implement all the route handler / APIs
// app.use(helloPrint); 

// app.get("/api/home", (req, res) => {
//   console.log("API home executed!");
//   res.send("<h1>API Home executed</h1>")
// });


// apply middleware on specific route handler or specific API
// app.get("/api/home", helloPrint, (req, res) => {
//   console.log("API home executed!");
//   res.send("<h1>API Home executed</h1>")
// });

app.get("/api/home", helloPrint, helloPrint2, (req, res) => {
  console.log("API home executed!");
  res.send("<h1>API Home executed</h1>")
});


app.get("/api/about", (req, res) => {
  console.log("API 'about' executed!");
  res.send("<h1>API 'about' executed</h1>")
});



app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
