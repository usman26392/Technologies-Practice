
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.ts";
import formRouter from "./routes/form-route.ts";
import cors from "cors"


// Load environment variables
dotenv.config();

// Create express application
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true, // Allow cookies/auth headers
    // Request headers the client will send
    // allowedHeaders: ["Content-Type", "Authorization", "Accept"],
}))


// This middleware for parsing JSON request bodies
app.use(express.json());

app.use("/api/", formRouter)


// connect to the database first
// if database is connected successfully then start the server
connectDB().then(() => {
    app.listen(PORT, function () {
        console.log(`Server is running at http://localhost:${PORT}`)
    })
})

