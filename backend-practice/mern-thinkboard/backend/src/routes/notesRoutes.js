

// this file for defining the routes related to notes. It imports the necessary controller functions from the notesControllers.js file and sets up the routes for creating, reading, updating, and deleting notes. Each route corresponds to a specific HTTP method (GET, POST, PUT, DELETE) and a URL pattern. The router is then exported for use in the main application file (server.js) where it will be mounted on a specific path (e.g., /api/notes).

import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesControllers.js";

const notesRouter = express.Router();

notesRouter.get("/", getAllNotes);
notesRouter.get("/:id", getNoteById);
notesRouter.post("/", createNote);

notesRouter.put("/:id", updateNote);
notesRouter.delete("/:id", deleteNote);



export default notesRouter;
