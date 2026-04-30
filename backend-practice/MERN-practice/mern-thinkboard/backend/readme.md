

https://www.youtube.com/watch?v=F9gB5b4jgOI



<!-- On server execution  -->
npm run dev
server.js imports notesRouter
  → notesRoutes.js imports notesControllers.js
    → notesControllers.js imports Note.js
      → mongoose.model("Note", noteSchema) is registered
