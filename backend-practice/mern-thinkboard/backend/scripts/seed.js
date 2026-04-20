import mongoose from "mongoose";
import notes from "../lib/placeholder-data.js";
import Note from "../src/models/Note.js";

async function seedNotes() {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully!");

        console.log("Clearing existing notes...");
        await Note.deleteMany({});

        console.log("Seeding notes from placeholder data...");
        const result = await Note.insertMany(notes);
        console.log(`Successfully seeded ${result.length} notes.`);

        console.log("Disconnecting from database...");
        await mongoose.disconnect();
        console.log("Disconnected successfully.");
    } catch (error) {
        console.error("Error seeding notes:", error);
        process.exit(1);
    }
}

seedNotes();