const mongoose = require("mongoose");
// require("dotenv").config();
mongoose.set("strictQuery", false);
const url = process.env.MONGODB_URI;
console.log("connecting to db", url);
mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log("error connecting to mongodb", error);
  });
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
});
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = mongoose.model("Note", noteSchema);
