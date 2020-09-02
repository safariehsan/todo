import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="globe2.png" className="App-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-item nav-link" to="/todo">
              ToDo
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
