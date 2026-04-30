
import mongoose from "mongoose";


export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_SPOTIFY_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}



