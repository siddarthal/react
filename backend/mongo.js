const mongoose = require("mongoose");
if (process.argv.length < 3) {
  console.log("give pwd as arguemnet");
  process.exit(1);
}
const pwd = encodeURIComponent(process.argv[2]); 
const url = `mongodb+srv://siddartharedddyl:${pwd}@ipvsid.vlxb6w0.mongodb.net/noteApp?retryWrites=true&w=majority`;
// console.log(url, " ", durl);
mongoose.set("strictQuery", false);
async function run() {
  try {
    await mongoose.connect(url);
    // rest of code
  } catch(error) {
    console.log(error);
  }
}

run();
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});
const Note = mongoose.model("Note", noteSchema);
Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
const note = new Note({
  content: "Html is easy",
  important: true,
});
note.save().then((result) => {
  console.log("note saved !");
  mongoose.connection.close();
});
