import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Statistics from "./components/Statistics";
function Finder({ anecdotes, counter }) {
  let max = 0;
  let idx = 0;
  counter.forEach((element, index) => {
    if (element > max) {
      max = element;
      idx = index;
    }
  });
  return (
    <>
      <p>{anecdotes[idx]} </p>
      <p>votes {max}</p>
    </>
  );
}
function App() {
  const [selected, setSelected] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [counter, setCounter] = useState(new Array(anecdotes.length).fill(0));
  const clickGood = (val) => {
    setGood(val);
  };
  const clickBad = (val) => {
    setBad(val);
  };
  const clickNeutral = (val) => {
    setNeutral(val);
  };
  const setCedent = (val) => {
    val = val % 7;
    setSelected(val);
  };
  const setRight = () => {
    console.log();
    const setval = [...counter];
    setval[selected] += 1;
    setCounter(setval);
  };
  return (
    <>
      <h1>give feedback</h1>
      <Button onSmash={() => clickGood(good + 1)} text={"good"} />
      <Button onSmash={() => clickNeutral(neutral + 1)} text={"neutral"} />
      <Button onSmash={() => clickBad(bad + 1)} text={"bad"} />
      <br />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <button onClick={() => setCedent(selected + 1)}>anecdotes</button>
      <br />
      <button onClick={() => setRight()}>Vote</button>
      <div>{anecdotes[selected]}</div>
      <p>has votes {counter[selected]}</p>
      <h3>anecdotes of the day it has the highest vote percentage</h3>
      <Finder anecdotes={anecdotes} counter={counter} />
    </>
  );
}
export default App;
