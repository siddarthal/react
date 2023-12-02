import { useState } from "react";
import Content from "./Components/Content";
import "./App.css";
import Filter from "./Components/Filter";
import Personform from "./Components/Personform";
function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [book, setBook] = useState([
    { names: "John Doe", numbers: "123-456-7890" },
    { names: "Jane Smith", numbers: "987-654-3210" },
  ]);
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = [...book];
    arr.push({ names: name, numbers: number });
    console.log(arr);
    setBook(arr);
    setName("");
    setNumber("");
  };
  const handleName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  const filtered = book.filter((item) =>
    item.names.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <h2>Phone book</h2>
      <label>Search: </label>{" "}
      <input type="text" placeholder="enter name..." onChange={handleSearch} />
      <h2>add new</h2>
      <Personform
        name={name}
        number={number}
        nameHandler={handleName}
        phoneHandler={handlePhone}
        submitHandler={handleSubmit}
      />
      <h2>Numbers</h2>
      <ul>
        {filtered.map((item, idx) => (
          <Content value={item} key={idx} />
        ))}
      </ul>
      {console.log(book)}
    </>
  );
}

export default App;
