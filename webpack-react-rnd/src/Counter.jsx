import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter-wrapper">
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
      <Link to="/">{"Go to home page --->"}</Link>
    </>
  );
};

export default Counter;
