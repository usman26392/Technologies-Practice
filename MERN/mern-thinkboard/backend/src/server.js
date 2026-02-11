import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


// Load environment variables
dotenv.config();
// console.log("MONGO__URI:", process.env.MONGO_URI);


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;



// Enable CORS for all routes (you can configure this as needed)   
// app.use(cors()); 
app.use(cors({
    origin: 'http://localhost:5173', // frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed methods
    // credentials: true, // allow cookies
})); 

// middleware to parse JSON request bodies
//  This should be before route registrations
// to ensure req.body is populated
// for all routes that need it
// e.g., POST / PUT requests
app.use(express.json());
app.use(rateLimiter); // Apply rate limiting middleware globally (you can also apply it to specific routes if needed)




// Register routes (after middleware)
app.use("/api/notes", notesRouter);

// sample routes for other modules
// app.use("/api/product", productRouter);
// app.use("/api/payments", paymentsRouter);
// app.use("/api/socialPosts", socialPostsRouter);
// app.use("/api/emails", emailsRouter);

// Connect to Database after setting up middleware and routes
connectDB().then(()=> {
    // Start server after DB connect
    app.listen(PORT, () => console.log("Server started on PORT", PORT));
});


