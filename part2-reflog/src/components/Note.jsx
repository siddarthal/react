const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make it imporatant";
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
