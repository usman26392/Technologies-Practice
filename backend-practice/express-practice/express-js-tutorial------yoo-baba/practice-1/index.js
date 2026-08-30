import express from "express";
const app = express();

// Related to HTTP request properties and methods of express.js


app.use(express.json());
// a middleware
 // Now APIs can accept JSON data in the request body. This middleware is essential for handling requests that send data in JSON format, such as POST request from a client-side form submission. It allows the server to parse (convert) the incoming JSON data and make it accessible in the request handler, enabling developers to work with the data easily.
 // Middleware to parse JSON request bodies i.e  // parse JSON request bodies means that the server can understand and process incoming requests that contain data in JSON format. When a client sends a request with a JSON payload, this middleware will automatically parse the JSON data and make it available in the req.body object of the request handler. This allows developers to easily access and manipulate the data sent by clients in their API endpoints.
// parse means: to analyze and convert data into a format that can be easily understood and processed by the server. In this case, it means converting the JSON data sent by the client into a JavaScript object that can be used in the server's code.


app.use(express.urlencoded({ extended: true}));
// a middleware
// Now APIs can too accept URL-encoded ( application/x-www-form-urlencoded ) data in the request body.

app.post("/api/user-form", (req, res) => {
  console.log("Received Data", req.body);
  // res.status(201).json({
  //   message: "User form submitted successfully!"
  // });
  res.send(req.body);
});



// req.headers is an object that contains the headers sent by the client in the HTTP request. Headers are key-value pairs that provide additional information about the request.
app.get("/api/users", (req, res) => {
  console.log(" Received Headers ", req.headers);
});






app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
