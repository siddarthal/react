const Content = ({ value, handleDelete }) => {
  let label = "delete";
  return (
    <li className="note">
      {value.names}--- {value.numbers}
      <br />
      <button onClick={handleDelete}>{label}</button>
    </li>
  );
};
export default Content;
