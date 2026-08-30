import express from "express";
import connectDB from "./db/db.js";
import cors from "cors";
import { userRouter } from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import { musicRouter } from "./routes/music.routes.js";


const app = express();
// global middlewrares
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // we will be able to set token in Browser cookies.
app.use("/api/", userRouter);

app.use("/api/", musicRouter);




connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
  });
});
