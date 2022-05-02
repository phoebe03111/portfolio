import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <header id="header" className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="logo" />
      </a>

      <nav className="nav">
        <ul style={{ display: showNav ? "flex" : null }} className="nav__list">
          <li className="nav__list-item">
            <a href="#about" onClick={toggleNav}>
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#projects" onClick={toggleNav}>
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#contact" onClick={toggleNav}>
              Contact
            </a>
          </li>
        </ul>

        <button className="nav__button" onClick={toggleNav}>
          {showNav ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
