import React from "react";
import ReactDOM from "react-dom";
import cars from "./vehicles";

//destructure array called cars
const [honda, tesla] = cars;

//destructuring objects
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

//destructuring an array inside an object
const {
  coloursByPopularity: [hondaTopColour2, hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour2, teslaTopColour],
} = tesla;

ReactDOM.render(
    <h1>Learning Destructuring</h1>
  <table className="table">
    <tr>
      <th>Model</th>
      <th>Top Speed</th>
      <th>Popular Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour2}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
