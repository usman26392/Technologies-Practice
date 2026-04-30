// console.log("Hello developer's world!");
// console.log(window); // ReferenceError: window is not defined:
// console.log(document);  // ReferenceError: document is not defined

// because this file is not running in a browser environment, but in a Node.js environment.

// example:
// Syntax is a CommonJS module: for one import
// const generateRandomNumber =  require("./utils");

// console.log("Random number between 0 and 100:", generateRandomNumber())

// example:
// Syntax is a CommonJS module: for more than one import
// const {generateRandomNumber, celciusToFahrenheit  } = require("./utils");

// console.log("30°C in Fahrenheit:", celciusToFahrenheit(30));
// console.log("Random number between 0 and 100:", generateRandomNumber());

// example:
//  ES default module
// we can also any named to the 'default import'.
// import getPosts, { getPostById } from "./utils.js";

// console.log(getPosts());
// console.log("Post with ID :", getPostById(2));

// now creating a simple server
import http from "node:http";
import fs from "fs/promises";
import url from "node:url";
import path from "node:path";

// const server = http.createServer((myReq, myRes) => {
//   myRes.write("Hello, welcome to my server!");
//   myRes.end();
// });

// example:
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello, welcome to my server!</h1>");
// });

// example:
// const server = http.createServer((req, res) => {
//     res.writeHead(500, {
//         "Content-Type": "text/html"
//     });
//     res.end("<h1>Server error !</h1>");
// });

// example:
// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.method);
// });

// example:
//  making routes
// const server = http.createServer((req, res) => {
//   try {
//     if (req.method === "GET") {
//       if (req.url === "/") {
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//         });
//         res.end("<h1>Home page</h1>");
//       } else if (req.url === "/about") {
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//         });
//         res.end("<h1>About page</h1>");
//       } else {
//         res.writeHead(404, {
//           "Content-Type": "text/html",
//         });
//         res.end("<h1>Page not found</h1>");
//       }
//     } else {
//       throw new Error("Method not allowed");
//     }
//   } catch (error) {
//     res.writeHead(500, {
//       "Content-Type": "text/plain",
//     });
//     res.end("Internal Server Error");
//   }
// });

// example:
//  working on file system of node js
// __filename; // gives the absolute path / relative path of the current file
// __dirname; // gives the absolute path / relative path of the current directory

// const _filename = url.fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);

// console.log("My file name is: ", _filename);
// console.log("My directory name is: ", _dirname);

// console.log("check path:", path.join(_dirname, "public", "about.html") )
// const server = http.createServer( async (req, res) => {
//   try {
//     let filePath = "";

//     if (req.method === "GET") {
//       if (req.url === "/") {
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//         });
//         filePath = path.join(_dirname, "public", "index.html")
//       } else if (req.url === "/about") {
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//         });
//         filePath = path.join(_dirname, "public", "about.html")
//       } else {
//         res.writeHead(404, {
//           "Content-Type": "text/html",
//         });
//         res.end("<h1>Page not found</h1>");
//       }

//       const data = await fs.readFile(filePath, "utf-8");
//       res.end(data);

//     } else {
//       throw new Error("Method not allowed");
//     }
//   } catch (error) {
//     res.writeHead(500, {
//       "Content-Type": "text/plain",
//     });
//     res.end("Internal Server Error");
//   }
// });

/**-------------------------------------------------------------------------------------- */
// example:
//  making Rest API
// const users = [
//   {
//     id: 1,
//     name: "Muhammad Usman",
//     email: "usman@example.com",
//   },
//   {
//     id: 2,
//     name: "Fahad Ali",
//     email: "ali@example.com",
//   },
//   {
//     id: 3,
//     name: "Rehan",
//     email: "rehan@mail.com",
//   },
//   {
//     id: 4,
//     name: "Farhan",
//     email: "farhan@example.com",
//   },
// ];

// const server = http.createServer((req, res) => {
//   if (req.url === "/api/users" && req.method === "GET") {
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify(users));
//     res.end();
//   } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
//     const id = req.url.split("/").pop();
//     // console.log("user id:", id)
//     const user = users.find((user) => user.id === parseInt(id));
//     if (user) {
//       res.setHeader("Content-Type", "application/json");
//       res.write(JSON.stringify(user));
//       res.end();
//     } else {
//       res.setHeader("Content-Type", "text/html");
//       res.statusCode = 404;
//       res.write(
//         JSON.stringify({
//           message: "User not found",
//         }),
//       );

//       res.end();
//     }
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.statusCode = 404;
//     res.write(
//       JSON.stringify({
//         message: "Route not found",
//       }),
//     );

//     res.end();
//   }
// });

/* ------------------------------------------------------------------------------------- */
// example:
// logger middleware

// const users = [
//   {
//     id: 1,
//     name: "Muhammad Usman",
//     email: "usman@example.com",
//   },
//   {
//     id: 2,
//     name: "Fahad Ali",
//     email: "ali@example.com",
//   },
//   {
//     id: 3,
//     name: "Rehan",
//     email: "rehan@mail.com",
//   },
//   {
//     id: 4,
//     name: "Farhan",
//     email: "farhan@example.com",
//   },
// ];

// // middleware function
// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   // logic will come here, before going response to the user, for example we can add authentication logic here, or we can add some data to the request object, which will be used in the response.
//   next();
// };

// const server = http.createServer((req, res) => {
//   logger(req, res, () => {
//     console.log("now responsed send to the user")
//     if (req.url === "/api/users" && req.method === "GET") {
//       res.setHeader("Content-Type", "application/json");
//       res.write(JSON.stringify(users));
//       res.end();
//     } else if (
//       req.url.match(/\/api\/users\/([0-9]+)/) &&
//       req.method === "GET"
//     ) {
//       const id = req.url.split("/").pop();
//       // console.log("user id:", id)
//       const user = users.find((user) => user.id === parseInt(id));
//       if (user) {
//         res.setHeader("Content-Type", "application/json");
//         res.write(JSON.stringify(user));
//         res.end();
//       } else {
//         res.setHeader("Content-Type", "text/html");
//         res.statusCode = 404;
//         res.write(
//           JSON.stringify({
//             message: "User not found",
//           }),
//         );

//         res.end();
//       }
//     } else {
//       res.setHeader("Content-Type", "text/html");
//       res.statusCode = 404;
//       res.write(
//         JSON.stringify({
//           message: "Route not found",
//         }),
//       );

//       res.end();
//     }
//   });
// });

/** ------------------------------------------------------------------------------------ */
// example:
// making API for POST http request
// const users = [
//   {
//     id: 1,
//     name: "Muhammad Usman",
//     email: "usman@example.com",
//   },
//   {
//     id: 2,
//     name: "Fahad Ali",
//     email: "ali@example.com",
//   },
//   {
//     id: 3,
//     name: "Rehan",
//     email: "rehan@mail.com",
//   },
//   {
//     id: 4,
//     name: "Farhan",
//     email: "farhan@example.com",
//   },
// ];

// const server = http.createServer((req, res) => {
//   if (req.url === "/api/users" && req.method === "GET") {
//     res.setHeader("Content-Type", "application/json");
//     res.write(JSON.stringify(users));
//     res.end();
//   } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
//     const id = req.url.split("/").pop();
//     // console.log("user id:", id)
//     const user = users.find((user) => user.id === parseInt(id));
//     if (user) {
//       res.setHeader("Content-Type", "application/json");
//       res.write(JSON.stringify(user));
//       res.end();
//     } else {
//       res.setHeader("Content-Type", "text/html");
//       res.statusCode = 404;
//       res.write(
//         JSON.stringify({
//           message: "User not found",
//         }),
//       );

//       res.end();
//     }
//   } else if (req.url === "/api/users" && req.method === "POST") {
//     let body = "";
//     // listen for data event to get the data from the request body
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       res.setHeader("Content-Type", "application/json");
//       const newUser = JSON.parse(body); // JSON object convert into object
//       users.push(newUser);
//       res.statusCode = 201;
//       res.write(JSON.stringify(newUser)); //  object convert in to JSON object
//       res.end();
//     });
//   } else {
//     res.setHeader("Content-Type", "text/html");
//     res.statusCode = 404;
//     res.write(
//       JSON.stringify({
//         message: "Route not found",
//       }),
//     );

//     res.end();
//   }
// });



/** ------------------------------------------------------------------------------------ */





// server.listen(8000, () => {
//   console.log("server is running on http://localhost:8000");
// });

// example
// server.listen(process.env.PORT, () => {
//   console.log("server is running on http://localhost:8000");
// });
