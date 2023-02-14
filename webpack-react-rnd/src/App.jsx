import React, { useState } from "react";
import "./style.css";
import logo from "./react.png";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="main-wrapper">
      <img src={logo} alt="data item" />
      <p>Counter JS</p>
      <span>{count}</span>
      <div className="button-container">
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          className="btn"
          onClick={() => count > 0 && setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
