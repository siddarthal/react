import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  useEffect(() => {
    const url = `http://localhost:3001/list`;
    axios.get(url).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [] = useState();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filter = list.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filter);
  return (
    <div>
      <label>Country: </label>
      <input type="text" value={search} onChange={handleChange} />
      {filter.length >= 10 ? (
        <p>enter more parameters</p>
      ) : (
        filter.map((it, i) => <p key={i}>{it.name.common}</p>)
      )}
      {filter.length == 1 ? <Filter data={filter[0]} /> : null}
    </div>
  );
}
const Filter = ({ data }) => {
  return (
    <div>
      <p>name: {data.name.common}</p>
      <img src={data.flags.png} />
      <p></p>
      <p></p>
    </div>
  );
};

export default App;
