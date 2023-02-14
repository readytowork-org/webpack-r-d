import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="main-wrapper">
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
