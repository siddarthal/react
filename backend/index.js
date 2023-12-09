// const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });
const returnId = () => {
  const idx = notes.length > 0 ? Math.max(...notes.map((item) => item.id)) : 0;
  return idx + 1;
};
app.get("/", (req, res) => {
  res.send("<h1>hi ra baigan</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.post("/api/notes", (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body.content) {
    return res.status(400).json({
      error: "resp cant be empty",
    });
  }
  // else if(){

  // }
  const note = {
    content: body.content,
    important: body.important || false,
  };
  let id = returnId();
  note.id = id;
  console.log(note);
  notes.push(note);
  res.status(200).json(note);
});
app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/del/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
