const express = require("express");
const service = require("./service");
const app = express();
app.use(express.json());

app.get("/v1/hospital", (req, res) => {
  const list = service.getList();
  res.status(200).json(list);
});
app.post("/v1/hospital", (req, res) => {
  const body = req.body;

  return service.addToList(body, res);
});
const PORT = 3000;
app.listen(PORT);
console.log("app is listening on port 3000");
