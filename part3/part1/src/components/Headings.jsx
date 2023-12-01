import Content from "./Content";
import React from "react";
const Headings = ({ courses }) => {
  return (
    <>
      {courses.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            <h4>{item.name}</h4>
            {item.parts.map((nextitem, idx) => {
              return <Content val={nextitem} key={idx} />;
            })}
            <li>
              total exercises {item.parts.reduce((a, b) => a + b.exercises, 0)}
            </li>
          </React.Fragment>
        );
      })}
    </>
  );
};
export default Headings;
