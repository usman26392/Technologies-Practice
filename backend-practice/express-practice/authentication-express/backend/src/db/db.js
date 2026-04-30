
import mongoose from "mongoose";


export default async function connectDB() {
    await mongoose.connect(process.env.MONGODB_UNIVERSITY_URI);
    console.log("Connected to DB");
}



