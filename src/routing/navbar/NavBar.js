import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Reversed Recipe Search</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/search">Search Recipe</Link>
      </div>
    </nav>
  );
};

export default NavBar;
