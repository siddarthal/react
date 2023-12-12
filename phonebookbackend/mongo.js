const mongoose = require("mongoose");
const pwd = encodeURIComponent(process.argv[2]);
const name = process.argv[3];
const number = process.argv[4];
const url = `mongodb+srv://siddartharedddyl:${pwd}@ipvsid.vlxb6w0.mongodb.net/phoneApp?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose.connect(url);
async function run() {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
}
run();
const phoneSchema = new mongoose.Schema({
  names: String,
  numbers: String,
});
const contact = mongoose.model("contacts", phoneSchema);
// const entry = new contact({ names: name, numbers: number });
// entry.save().then((result) => {
//   console.log("note saved");
//   console.log(result);
//   //   mongoose.connection.close();
// });
contact.find({}).then((result) => {
  console.log(result);
  mongoose.connection.close();
});
