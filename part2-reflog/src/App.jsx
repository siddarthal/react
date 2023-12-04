import Note from "./components/Note";
import { useState, useEffect } from "react";
import axios from "axios";
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState("enter please");
  const [showAll, setShowAll] = useState(true);
  useEffect(() => {
    console.log("useEffect");
    noteService.getAll().then((response) => {
      console.log("promise fulfilled");
      const data = response.data;
      setNotes(data);
    });
  }, []);
  console.log("render", notes.length, "notes");
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNotes,
      important: Math.random() < 0.5,
    };
    console.log(noteObject);
   noteService.create(noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response.data));
      setNewNotes("");
    });
    
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
  const handleImportance = (id) => {
    const note = notes.find((e) => e.id === id);
    const changedNote = { ...note, important: !note.important };
    // setNotes([...notes,changedNote]); this wont work
    noteService.update.put(id,changedNote).then((response) => {
      setNotes(notes.map((n) => (n.id !== id ? n : response.data)));
    });
    console.log(`importance of ${id} needs to be toggled`);
  };
  const notesToShow = showAll
    ? notes
    : notes.filter((item) => item.important === true);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => handleImportance(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNotes} onChange={handleChange} />
        <button type="submit">save</button>
      </form>
      <button onClick={handleClick}>
        show {showAll ? "important" : "all"}
      </button>
    </div>
  );
};

export default App;
