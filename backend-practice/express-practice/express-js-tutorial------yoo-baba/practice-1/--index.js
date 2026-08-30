import express from "express";
const app = express();


// Related to HTTP response methods of express.js


// HTTP requests for the client: get, post, put, delete on the server.
// HTTP requests are for the client to communicate with the server. The client can send a request to the server, and the server will respond with data or perform an action based on the request.

// whenever the client sends a request through this 'route(i.e url)' on the server, the server will sends a response back to the client. The response can be in the form of 'data', a 'message', or an 'error'.
// The server can also perform actions based on the request,  such as creating(POST), updating(PUT), or deleting(DELETE) data in a database.

// app.get("/api", (req, res) => {
//   console.log("Request received form client through API.", req);
//   // res.send("<h1>Content received from Database with the help of API </h1>");
//   res.send(
//     "<h1> API is running on the server and the client can send request to it </h1>",
//   );
// });

// Dynamic API get route
// app.get("/api/products/:id", (req, res)=> {
//     // const productId = req.params;
//     // console.log("product id:", productId.id);
//     res.send(req.params)
// });

// Dynamic API get nesting route
// app.get("/api/products/:productId/review/:reviewId", (req, res)=> {
//     // res.send(req.params);
//     // res.send(req.params.productId);
//     res.send(req.params.reviewId);
// });

// Dynamic API get route with multiple parameters
// app.get("/api/products/:productName-:productCount", (req, res)=> {
//     res.send(req.params);
// });

// Dynamic API get route with query parameters

// app.get("/api/products/search", (req, res) => {
//   // res.send(req.query);
//   // Get individual parameters
//   const name = req.query.name;
//   const category = req.query.category;

//   // Or use object destructuring
//   // const { name, category } = req.query;

//     res.send(`Name: ${name},  category: ${category}`);
//   //    OR
// //   res.send({
// //     success: true,
// //     message: "Data received successfully",
// //     data: {
// //       name: name,
// //       category: category,
// //     },
// //   });
// });

// Try this: /api/products/search?name=mobile&category=computer

// response methods of express.js
app.get("/api", (req, res) => {
  // res.status(200).json({
  //   success: true
  // });

  // Variation 1: Send a JSON response with a success message and an array of products
  // res.json({
  //   success: true,
  //   data: [
  //     {
  //       id: 1,
  //       name: "Product 1",
  //     },
  //     {
  //       id: 2,
  //       name: "Product 2",
  //     },
  //   ],
  // });

  // Variation 2: res.redirect() sends a redirect response to the client,instructing it to navigate to a different URL. The client will then make a new request to the specified URL.
  // res.redirect("https://www.google.com");
  // res.redirect("/404");
  res.redirect(301, "https://www.google.com"); // 301 is for permanent rediect,
  // 302 is for temporary redirect. B default, res.redirect() used 302 status code for temporary redirect.
});

// Example: setup ejs:
app.set("view engine", "ejs");

app.get("/api/contact-us", (req, res) => {
  res.render("user-form");
});

// Example: res.download()
app.get("/api/catalogs", (req, res) => {
  res.download(
    "./public/Full-stack-MERN-developer-CV.pdf",
    "resume.pdf",
    (err) => {
      if (err) {
        res.status(500).send("Error downloading the file.");
      } else {
        res.status(200).send("File downloaded successfully.");
      }
    },
  );
});

// Example: res.sendFile()
app.get("/api/files", (req, res) => {
  res.sendFile(
    "Full-stack-MERN-developer-CV.pdf",
    { root: "./public/" },
    (err) => {
      if (err) {
        res.status(500).send("Error sending the file.");
      } else {
        res.status(200).send("File sent successfully.");
      }
    },
  );
});

// Example: res.write() and res.end()
// res.write() is used to send multiple chunks of data to the client in a streaming manner. It allows you to send data in parts, rather than sending the entire response at once. This can be useful for sending large amounts of data or for sending data that is generated dynamically over time.
// res.end() is used to signal the end of the response. It indicates that no more data will be sent, and the server can finalize the response and close the connection with the client.
app.get("/api/stream", (req, res) => {
  res.write("This is the first part of the response.\n");
  res.write("This is the Second part of the response.\n");
  res.write("This is the Third part of the response.\n");
  res.end("This is the end of the response.");
});

// Example: res.sendStatus() is used to send an HTTP response with a specific status code.
app.get("/api/status", (req, res) => {
  res.sendStatus(404); // Sends a 404 Not Found HTTP status code to the client. The client will receive a response with the status code 404, indicating that the requested resource was not found on the server.
});

// Example: res.status() is used to set the HTTP status code of the response. It allows you to specify the status code that should be sent back to the client along with the response. You can chain it with other response methods like res.send() or res.json() to send a response with a specific status code.
app.get("/api/products", (req, res) => {
  // if my database's data is available, then send the data with a success message and a 200 status code. If the data is not available, then send an error message with a 404 status code.
  res.status(200).json({
    success: true,
    data: [
      {
        id: 1,
        name: "Product 1",
      },
      {
        id: 2,
        name: "Product 2",
      },
    ],
  });
});

// Example: res.headersSent() is used to check if the response headers have already been sent to the client. It returns a boolean value indicating whether the headers have been sent or not. This can be useful to prevent sending multiple responses or modifying headers after they have already been sent.
app.get("/api/check-headers", (req, res) => {
  if (!res.headersSent) {
    res
      .status(200)
      .send("Headers have not been sent yet. You can modify the resposne.");
  }
  res.send("Headers have already been sent. Cannnot modify the response.");
});

// Example: res.set() and res.get() are used to set and get HTTP response headers. res.set() allows you to set custom headers for the response, while res.get() allows you to retrieve the value of a specific header that has been set.
app.get("/api/set-get-headers", (req, res)=> {
  res.set("Custom-Header", "This is a custom header value");
  const customHeaderValue = res.get("Custom-header");
  res.send(`Custom header value: ${customHeaderValue}`);
});




app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
