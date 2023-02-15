import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Welcome, Hello world!!
      <br />
      <p>This is homepage.</p>
      <Link to="/counter">{"Go to counter page --->"}</Link>
    </div>
  );
};

export default Home;
