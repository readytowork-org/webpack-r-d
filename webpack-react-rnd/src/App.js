import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import logo from "./react.png";
import "./style.css";
import Loadable from "react-loadable";

const LoaderComponent = () => <p>Please wait. Loading....</p>;

const Home = Loadable({
  loader: () => import(/*webpackChunkName:"Homepage"*/ "./Home"),
  loading: LoaderComponent,
});

const Counter = Loadable({
  loader: () => import(/*webpackChunkName:"Counterpage"*/ "./Counter"),
  loading: LoaderComponent,
});

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
