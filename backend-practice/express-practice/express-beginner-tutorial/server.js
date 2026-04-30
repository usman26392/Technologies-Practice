import express from "express";
import path from "node:path";
import url from "node:url";

const app = express();
app.use(express.json()); // middleware to parse JSON body of the request

const portNumber = process.env.PORT ?? 8000;
console.log("Port number:", portNumber);

const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// example:
// app.get("/", (req, res)=> {
//     // res.send("This response text is from the server");
//     res.sendFile(path.join(_dirname, "public", "index.html"));
// });

// app.get("/about", (req, res)=> {
//     res.send("This is from the about page");
// });

// example:  static files are files that are sent to the client as they are without any changes.
// app.use(express.static(path.join(_dirname, "public")));

// example: RESTful API
let posts = [
  { id: 1, title: "First Post", content: "This is the first post" },
  { id: 2, title: "Second Post", content: "This is the second post" },
  { id: 3, title: "Third Post", content: "This is the third post" },
];

//  - Send all posts on GET http request method
// app.get("/api/posts", (req, res)=> {
//     res.json(posts);
// });

// - Send a single post by id on GET http request method
app.get("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// dealing with limit query parameter
// http://localhost:5000/api/posts/?limit=2
// app.get("/api/posts/", (req, res)=> {
//     const limit = parseInt(req.query.limit);
//     console.log("limit", limit)
//     if (!isNaN(limit) && limit > 0) {
//         res.json(posts.slice(0, limit));
//     } else {
//         res.json(posts);
//     }
// });

// example: dealing status code
app.get("/api/posts", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if(!post) {
    res.status(404).json({ message: "Post not found" });
  }else {
    res.status(200).json(post);
  }
});

/** ---------------------------------------------------------------------- */



app.listen(portNumber, () =>
  console.log("Server is running on port: ", portNumber),
);
