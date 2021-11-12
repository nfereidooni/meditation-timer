import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";


function Header(props) {


  return (
    <nav class="main-nav">
        <a href="index.html" class="logo">Simple Meditation Timer</a>
        <ul class="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
  );
}

export default Header;