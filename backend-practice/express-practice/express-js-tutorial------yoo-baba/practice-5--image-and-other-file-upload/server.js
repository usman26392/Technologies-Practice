import express from "express";
const app = express();
import contactRouters from "./routes/contact.routes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { body, validationResult } from "express-validator";
import multer from "multer";
import path from "path";

dotenv.config(); // make accessible from .env file
const PORT = process.env.PORT;

// Example: setup ejs:
app.set("view engine", "ejs");
// app.set("views", "./ejs-templates"); // for custom views folder

app.use(express.json());

// a middlewares
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.static("public"));

// Routes
// app.use("/", contactRouters);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    const newFileName = `abc${Date.now()}${path.extname(file.originalname)}`;
    cb(null, newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};

const upload = multer({
  storage, // mandatory
  limits: {
    fileSize: 1024 * 1024 * 3, // 3MB
  },
  fileFilter,
});



app.get("/my-form", (req, res) => {
  res.render("myForm", {
    errors: [],
  });
});

// accepting single file upload
// app.post("/my-form", upload.single("fileUpload"),(req, res)=> {
//   if(!req.file) {
//     return res.status(400).json({
//       message: "No file uploaded"
//     })
//   }
//   res.send(req.file);
// });

// accepting multiple file upload
// app.post("/my-form", upload.array("fileUpload", 3), (req, res) => {
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).json({
//       message: "No file uploaded",
//     });
//   }
//   res.send(req.files);
// });

// accepting files upload with different field names
app.post("/my-form", upload.fields([
  {
    name: 'fileUpload', maxCount: 1
  },
  {
    name: "documentUpload", maxCount: 1
  }
]),(req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }
  res.send(req.files);
});




// global error handling middleware
app.use((err, req, res, next) => {
  // console.log(req)
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res
        .status(400)
        .json({ error: "File size is too large. Max limit is 3MB." });
    }
    return res.status(400).json({
      message: `Multer Error: ${err.message}`,
    });
  } else if (err) {
    return res.status(500).json({
      message: err.message || "Internal Server Error!",
    });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

// Database connection
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}!`);
//   });
// });
