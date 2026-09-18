import mongoose from "mongoose";
import dotenv from "dotenv"



dotenv.config(); // make accessible from .env file


export default async function connectDB() {
  await mongoose
    // .connect("mongodb://127.0.0.1:27017/api-practice")
    .connect(process.env.MONGO_URI)

    .then(() => console.log("Database connected successfully!"));
}
