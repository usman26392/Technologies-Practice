import express from "express";
import path from "node:path";
import url from "node:url";
import { newPostGet, postDelete, postUpdate, sendAllpost, sendSinglePost } from "../controllers/post-controller.js";

// express router is a way to organize your routes in a separate file. It allows you to create modular and reusable route handlers. You can define your routes in a separate file and then import them into your main server file. This helps to keep your code organized and maintainable.
const router = express.Router();
const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);



//  - Send all posts on GET http request method
router.get("/", sendAllpost);
// - Send a single post by id on GET http request method
router.get("/:id", sendSinglePost );

// dealing with limit query parameter
// http://localhost:5000/?limit=2
// router.get("/", (req, res)=> {
//     const limit = parseInt(req.query.limit);
//     console.log("limit", limit)
//     if (!isNaN(limit) && limit > 0) {
//         res.json(posts.slice(0, limit));
//     } else {
//         res.json(posts);
//     }
// });

// example: dealing status code
// router.get("/", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((p) => p.id === postId);
//   if(!post) {
//     res.status(404).json({ message: "Post not found" });
//   }else {
//     res.status(200).json(post);
//   }
// });

/** ----------------------- POST http request ------------------------ */
router.post("/", newPostGet);
/** ---------------------------------------------------------- */
// PUT http request method
router.put("/:id", postUpdate);

/** -------------------------------------------------------------- */

// delete http request method
router.delete("/:id", postDelete);

/** --------------------------------------------------------------- */
// example: dealing with error handling with middleware
// router.get("/:id", (req, res, next) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((p) => p.id === postId);
//   if (!post) {
//     const error = new Error(`A post with the id of ${postId} was not found!`);
//     return next(error);
//   } else {
//     res.status(200).json(post);
//   }
// });

export default router;
