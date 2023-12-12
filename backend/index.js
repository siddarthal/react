const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
require("dotenv").config();
const Note = require("./models/note");

app.get("/", (req, res) => {
  res.send("<h1>hi ra baigan</h1>");
});

app.get("/api/notes", (req, res) => {
  // res.json(notes);
  console.log("hi");
  Note.find({}).then((response) => {
    res.json(response);
    console.log(response);
  });
});
app.post("/api/notes", (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body.content) {
    return res.status(400).json({
      error: "resp cant be empty",
    });
  }
  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  console.log(note);
  // notes.push(note);
  note
    .save()
    .then((savedNote) => {
      res.status(200).json(savedNote);
    })
    .catch((error) => alert(`problem saving data in db`));
});
app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  Note.findById(id).then((note) => res.status(200).json(note));
});
app.put("/api/notes/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  Note.findByIdAndUpdate(id, body, { new: true })
    .then((updatedNote) => {
      res.json(updatedNote);
    })
    .catch((error) => next(error));
});
app.delete("/api/notes/del/:id", (req, res, next) => {
  const id = req.params.id;
  // notes = notes.filter((note) => note.id !== id);
  Note.findByIdAndDelete(id)
    .then((result) => res.status(204).end())
    .catch((error) => next(error));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
