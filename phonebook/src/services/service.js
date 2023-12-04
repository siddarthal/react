import axios from "axios";

const url = "http://localhost:3001/persons";
const getAll = () => {
  const promise = axios.get(url);
  return promise.then((response) => response.data);
};
const post = (currObject) => {
  const promise = axios.put(url, currObject);
  return promise.then((res) => res.data);
};
export default { getAll, post };
