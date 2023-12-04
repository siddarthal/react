import { useState, useEffect } from "react";
import Content from "./Components/Content";
import "./App.css";
import Filter from "./Components/Filter";
import Personform from "./Components/Personform";
import api from "./services/service";
function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [book, setBook] = useState([]);
  useEffect(() => {
    // console.log("useEffect");
    api.getAll().then((response) => {
      console.log("success");
      // console.log(response.data);
      setBook(response);
    });
  }, []);
  const [search, setSearch] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const findUser = () => {
      return book.find((item) => item.names === name);
    };
    console.log(findUser());
    if (!findUser()) {
      const arr = { names: name, numbers: number };
      api.post(arr).then((res) => {
        setBook(book.concat(res));
        setName("");
        setNumber("");
      });
    } else {
      const change = findUser();
      const changeNumber = { ...change, numbers: number };
      const idx = change.id;
      console.log(idx);
      const userConfirmed = window.confirm(
        "name is already saved with this number do you want to update the number"
      );
      if (userConfirmed) {
        api.update(idx, changeNumber).then((res) => {
          setBook(book.map((item) => (item.id !== idx ? item : res)));
        });
      } else {
        alert("not saved try again");
      }
      // console.log(changeNumber);
    }

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
  const deleteItem = (id) => {
    api
      .remove(id)
      .then((res) => setBook(book.filter((item) => item.id !== id)))
      .catch((e) => {
        alert(`contact is already deleted in database`);
        setBook(book.filter((item) => item.id !== id));
      });
  };
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
        {filtered.map((item) => (
          <Content
            value={item}
            key={item.id}
            handleDelete={() => deleteItem(item.id)}
          />
        ))}
      </ul>
      {console.log(book)}
    </>
  );
}

export default App;
