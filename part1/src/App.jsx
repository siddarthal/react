import "./App.css";
import { useState } from "react";
import Parts from "./components/Parts";
import Button from "./components/Button";
import History from "./components/History";
const Hello = ({ name, age }) => {
  const ageCal = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>Your are born in {ageCal()}</p>
    </div>
  );
};
function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState({ left: 0, right: 0 });
  const [allClicks, setClicks] = useState([]);
  setInterval(() => {
    setCount(count + 1);
  }, 100000);
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const name = "Peter";
  const age = 10;
  const minusButton = (num) => {
    console.log(num);
    setCount(num);
  };
  const plusButton = () => {
    console.log("clicked 1");
    setCount(count + 1);
  };
  const leftClick = () => {
    console.log("clicked left");
    setValue({ ...value, left: value.left + 1 });
    setClicks(allClicks.concat("L"));
    setLeft(left + 1);
    setTotal(left + right);
  };
  const rightClick = () => {
    console.log("clicked right");
    setValue({ ...value, right: value.right + 1 });
    setClicks(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(left + right);
  };
  const greet = (who) => () => {console.log("hello ", who);}
  return (
    <>
      <h4>{course.name}</h4>
      {course.parts.map((part, index) => (
        <Parts part={part} key={index} />
      ))}
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <h1>{count}</h1>
      <Button onClick={()=>minusButton(1000)} text={"zero"} />
      <Button onClick={plusButton} text={"plus"} />
      {left}
      <button onClick={leftClick}>{value.left}LEFT</button>
      {right}
      <button onClick={rightClick}>{value.right} RIGHT</button>
      <p>{allClicks.join(" ")}</p>
      total: {total}
      <History allClicks={allClicks} />
      <button onClick={greet("world")}>Hello</button>
    </>
  );
}

export default App;
