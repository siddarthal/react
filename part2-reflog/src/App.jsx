import Note from "./components/Note";
import { useState } from "react";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNotes, setNewNotes] = useState("enter please");
  const [showAll, setShowAll] = useState(true);
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = [...notes];
    noteObject.push({
      content: newNotes,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    });
    setNotes(noteObject);
    console.log(noteObject);
    setNewNotes("");
  };
  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setNewNotes(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((item) => item.important === true);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNotes} onChange={handleChange} />
        <button type="submit">save</button>
      </form>
      <button onClick={handleClick}>show {showAll ? 'important':'all'}</button>
    </div>
  );
};

export default App;
