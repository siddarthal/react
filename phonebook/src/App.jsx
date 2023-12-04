import { useState, useEffect } from "react";
import Content from "./Components/Content";
import "./App.css";
import Filter from "./Components/Filter";
import Personform from "./Components/Personform";
import axios from "axios";
import {getAll, post} from './services/service'
function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [book, setBook] = useState([]);
  useEffect(() => {
    // console.log("useEffect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("success");
      // console.log(response.data);
      setBook(response.data);
    });
  }, []);
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const arr={ names: name, numbers: number };
    axios.post("http://localhost:3001/persons", arr).then((res) => {
      const data = res.data;
      setBook(book.concat(data));
      setName("");
      setNumber("");
    });
    // console.log(arr);
   
  };
  const handleName = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    // console.log(event.target.value);
    setNumber(event.target.value);
  };
  const handleSearch = (event) => {
    // console.log(event.target.value);
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
