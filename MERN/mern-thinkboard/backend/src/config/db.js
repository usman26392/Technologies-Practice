
import mongoose from "mongoose";


export const connectDB = async ()=> {
    try {
        // Connect to MongoDB with the help of mongoose
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1); // Exit the process with failure
    }
}