import Note from "../models/Note.js";
// this file will contain the logic for handling requests related to notes, such as creating, reading, updating, and deleting notes. Each function corresponds to a specific route and HTTP method defined in the notesRoutes.js file. The functions interact with the Note model to perform database operations and send appropriate responses back to the client.


// export const getAllNotes = (req, res) => {
//   res.status(200).send("you got 5 notes");
// }

// req: contains information about the "incoming request" from the client or browser , such as parameters, body, headers, etc.
// res: is used to send a response back to the client, allowing you to set status codes, headers, and the response body.
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Fetch all notes, sorted by creation date (newest first);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// get Note by ID
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if(!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    res.status(500).json({ message: "Server Error" });
  }
}

export const createNote = async (req, res) => {
  // res.status(201).send("note created successfully");
  try {
    // console.log("Received req.body:", req.body); // Debug: see what's coming
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    // console.log("first created dataaaaa", newNote);
    await newNote.save()

    res.status(201).json({
      message: "Note created successfully",
    });
  } catch (error) {
    console.error("Error in creating note:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );

    if (!updatedNote)
      return res.status(404).json({
        message: "Note not found",
      });

    res.status(201).json({
      message: "note updated successfully",
      updatedNote,
    });
  } catch (error) {
    console.error("Error in updateNote note:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({
        message: "Note not found",
      });
    res.status(201).json({
      message: "note deleted successfully",
      deletedNote
    });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
