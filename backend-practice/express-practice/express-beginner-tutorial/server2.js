import express from "express";
import postsRouter from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/not-found.js";
import url from "node:url";
import path from "node:path";


const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const portNumber = process.env.PORT ?? 8000;
const app = express();
app.use(express.json()); // middleware to parse JSON body of the request
// middleware to 
app.use(
  express.urlencoded({
    extended: false,
  }),
);

// logger middleware on app level
app.use(logger)


// Built-in middleware that serves static files.
// “Serve static files (HTML, CSS, JS, images, etc.) from the public folder.”
app.use(express.static(path.join(_dirname, "public")));


app.use("/api/posts", postsRouter);

// not found middleware
// app.use((req, res, next)=> {
//   const error = new Error("Not found yey!");
//   next(error);
// });
// OR
app.use(notFound);



// error middleware
app.use(errorHandler);

app.listen(portNumber, () =>
  console.log("Server is running on port: ", portNumber),
);
