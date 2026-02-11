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
