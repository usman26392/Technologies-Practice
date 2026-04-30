

// this file defines the Note model using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. The Note model represents the structure of a note document in the MongoDB database, including fields for title, content, and timestamps for when the note was created and last updated. This model will be used in the controllers to perform database operations related to notes, such as creating, reading, updating, and deleting notes.  

import mongoose from "mongoose";


// steps:
// 1. Create a schema
// 2. Create a model

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);


// Create a model
const Note = mongoose.model("Note", noteSchema);
export default Note;
