// console.log("hi");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
let book = [
  {
    id: 1,
    names: "Arto Hellas",
    numbers: "040-123456",
  },
  {
    id: 2,
    names: "Ada Lovelace",
    numbers: "39-44-5323523",
  },
  {
    id: 3,
    names: "Dan Abramov",
    numbers: "12-43-234345",
  },
  {
    id: 4,
    names: "Mary Poppendieck",
    numbers: "39-23-6423122",
  },
];
const genId = () => {
  return Math.floor(Math.random() * 100000000);
};
const checkName = (Name) => {
  // return book.some(item => item.name === Name);
  let exists = false;
  book.forEach((item) => {
    if (item.name === Name) {
      exists = true;
    }
  });
  return exists;
};
app.post("/api/contacts", (req, res) => {
  const body = req.body;
  console.log(body);
  if (!(body.names || body.numbers)) {
    return res.status(400).json({ error: "no fields cant be empty" });
  } else if (checkName(body.names)) {
    return res.status(400).json({ error: "contact is already available" });
  }
  const newC = {
    names: body.names,
    numbers: body.numbers,
  };
  let id = genId();
  newC.id = id;
  book.push(newC);
  res.status(200).json(newC);
  console.log("newC", newC);
  console.log("book", book);
});
const date = Date();
app.get("/api/contacts", (req, res) => {
  res.status(200).json(book);
});
// console.log(`Phone book has info for ${book.length} two people`);
// console.log(date);
app.get("/api/info", (req, res) => {
  res.send(
    `<p>Phone book has info for ${book.length}  people</p> <br/> <p> ${date}</p> `
  );
});
app.get("/api/contacts/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(req.params.id);
  const number = book.find((item) => item.id === id);
  if (!id) {
    res.status(404).json({ error: "cant find number with that id" });
  } else {
    res.status(200).json(number);
  }
});
app.delete("/api/contacts/:id", (req, res) => {
  const id = Number(req.params.id);
  book = book.filter((item) => item.id !== id);
  res.status(204).end();
});
app.put("/api/contacts/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log("params", req.body);
  let search = book.find((item) => item.id === id);
  if (search) {
    // search.
    search.numbers = req.body.numbers;
    console.log(search);
    res.status(200).json(search);
  } else {
    res.status(404).end();
  }
});
const PORT = 3001;
app.listen(PORT);
console.log("app is listening on port 3001");
