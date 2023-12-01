import React from "react";
const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;

  const avg = sum === 0 ? 0 : (good * 1 + neutral * 0 - bad * 1) / sum;
  const pos = good === 0 ? 0 : (good / sum) * 100;
  if (((good === neutral) === bad) === 0) {
    return <p>No feed back given</p>;
  } else {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td>
                <p>good {good}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>neutral {neutral}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>bad {bad}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>all {sum}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>average {avg}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>positive {pos}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
