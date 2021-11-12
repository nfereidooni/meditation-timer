import React, { useState } from 'react';
import "./style.css";
import { NavLink } from "react-router-dom";


function Header(props) {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">

        <div className="logo-container">
          <a href="#" className="logo">Simple Meditation Timer</a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <i class="fas fa-2x fa-times"></i>
        ) : (
          <i class="fas fa-2x fa-bars"></i>
        )}
      </div>

    </div>
  );
}

export default Header;