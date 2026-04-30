import mongoose from "mongoose";


export const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        throw new Error("Please provide MONGO_URI in the environment variables")
    }
    try {
        await mongoose.connect(mongoUri);
        console.log("Database connected successfully")

    } catch (error: any) {
        console.error("Error connecting to database", error.message);
        process.exit(1);
    }
}