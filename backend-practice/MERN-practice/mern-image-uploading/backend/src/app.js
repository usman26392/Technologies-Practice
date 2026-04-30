import express from "express";
import connectDB from "./db/db.js";
import { imageuploadcollection } from "./models/image.model.js";
import multer from "multer";
import imageUploadTOImageKIT from "./services/storage.service.js";
import cors from "cors";

const app = express();
// middlewrares
app.use(cors());
app.use(express.json());

// multer middleware
// client/browser k paas , response jaany say pahlay jo function execute hotta hay wo kahlata hay middleware.
// that function is executed, before response going to the browser.
const upload = multer({
  storage: multer.memoryStorage(),
});

// RESTful APIs
app.get("/posts", async (req, res) => {
  const posts = await imageuploadcollection.find();
  res.status(200).json({
    message: "Post fetched successfully",
    posts,
  });
});

app.post("/create-post", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const result = await imageUploadTOImageKIT(req.file.buffer);

  const imageData = await imageuploadcollection.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post created successfully",
    imageData,
  });
});



connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
  });
});
