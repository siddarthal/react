import axios from "axios";

const url = "http://localhost:3001/persons";
const getAll = () => {
  const promise = axios.get(url);
  return promise.then((response) => response.data);
};
const post = (currObject) => {
  const promise = axios.post(url, currObject);
  return promise.then((res) => res.data);
};
const remove = (id) => {
  return axios.delete(`${url}/${id}`);
};
const update = (id,currObject) => {
  const promise = axios.put(`${url}/${id}`, currObject);
  return promise.then((res => res.data));
};
export default { getAll: getAll, post: post, remove: remove, update: update };
