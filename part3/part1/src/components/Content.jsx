function Content({ val }) {
//   console.log("obj", val);
  return (
    <li key={val.name}>
      {val.name} {val.exercises}
    </li>
  );
}
export default Content;
