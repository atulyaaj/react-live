import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    React using JSX
  </h1>
);

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      React using JSX
    </h1>
  );
};

// Component Composition
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    {title}
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// root.render(title);
