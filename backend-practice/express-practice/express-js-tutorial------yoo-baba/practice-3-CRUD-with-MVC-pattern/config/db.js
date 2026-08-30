import mongoose from "mongoose";
import dotenv from "dotenv"



dotenv.config(); // make accessible from .env file


export default async function connectDB() {
  await mongoose
    // .connect("mongodb://127.0.0.1:27017/contact-crud")
    .connect(process.env.MONGO_URL)

    .then(() => console.log("Database connected successfully!"));
}
