import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 className="head" tabIndex="5">
    React using JSX
  </h1>
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
