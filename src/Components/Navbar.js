import React from "react";
import PropTypes from "prop-types";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        {/* <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: props.dark === "black" ? "black" : "#F8F9FA",
          color: "green",
        }}
      > */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
          <ul className="navbar-nav" style={{ color: "red" }}>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home<span className="sr-only">(current)</span>
              </a>
              {/* <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`custom-control custom-switch text-${
            props.dark === "light" ? "dark" : "white"
          }`}
        >
          {/* <div className="">
            <button
              id=""
              className="color mx-1 btn"
              style={{ backgroundColor: "#A1D01D" }}
            ></button>

            <button
              id=""
              className="color mx-1 btn"
              style={{ backgroundColor: "#F29B00" }}
            ></button>

            <button
              id=""
              className="color mx-1 btn"
              style={{ backgroundColor: "#82C4E4" }}
            ></button>

            <button
              onClick={props.dark}
              className="color mx-1 btn"
              style={{ backgroundColor: "grey" }}
            ></button>
          </div> */}
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggleMode}
          />

          <label className="custom-control-label" htmlFor="customSwitch1">
            Enable {props.mode == "light" ? "Dark" : "Light"} Mode
          </label>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.default = {
  title: "Title Text Here",
  about: "About Text Here",
};
