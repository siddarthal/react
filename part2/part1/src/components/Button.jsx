import React from "react";
const Button = ({ onSmash, text }) => {
  return <button onClick={onSmash}>{text}</button>;
};
export default Button;
