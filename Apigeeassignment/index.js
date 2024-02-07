const express = require("express");
const service = require("./service");
const app = express();
app.use(express.json());

app.get("/v1/hospital", (req, res) => {
  
  res.status(200).json(service.getList());
});
app.post("/v1/hospital", (req, res) => {
  const body = req.body;
  console.log(req.body, "body");
  return service.addToList(body, res);
});
const PORT = 3000;
app.listen(PORT);
console.log("app is listening on port 3000");
