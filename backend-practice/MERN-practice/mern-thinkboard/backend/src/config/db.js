
import mongoose from "mongoose";

// Function to connect to the MongoDB database
// This function uses mongoose to connect to the MongoDB database using the connection string from environment variables. It logs a success message if the connection is successful, or an error message and exits the process if the connection fails.
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