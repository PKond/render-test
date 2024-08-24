import express from "express";
import cors from "cors"; // Import CORS middleware

const app = express();
const PORT = 3000;

app.use(express.static('dist'))

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors()); // Use CORS middleware

// Route to handle GET requests to /api/notes
app.get("/api/notes", (req, res) => {
  // Example response with some notes data
  const notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true,
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false,
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true,
    },
    {
      id: "e7b9",
      content: "POST is used to crerate new resources",
      important: true,
    },
  ];
  res.json(notes);
});

// Route to handle POST requests to /api/notes
app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  // For demonstration purposes, just echo back the new note
  res.status(201).json(newNote);
});

// Route to handle GET request to /api/notes/:id
app.get("/api/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  // Find note by ID (dummy data for example)
  const note = {
    id: noteId,
    title: "Note " + noteId,
    content: "Content of note " + noteId,
  };
  res.json(note);
});

// Route to handle PUT request to /api/notes/:id
app.put("/api/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  const updatedNote = req.body;
  // For demonstration, just echo back the updated note
  res.json({ id: noteId, ...updatedNote });
});

// Route to handle DELETE request to /api/notes/:id
app.delete("/api/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id, 10);
  // For demonstration, assume the note is deleted
  res.status(204).send(); // 204 No Content
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
