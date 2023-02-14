import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Counter from "./Counter.jsx";
import Home from "./Home.jsx";
import logo from "./react.png";

const App = () => {
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
        </ul>
      </div>
      <div className="main-wrapper">
        <img src={logo} alt="data item" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </>
  );
};

export default App;
