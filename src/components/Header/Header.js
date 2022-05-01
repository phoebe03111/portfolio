import React from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />

      <nav>
        <ul className="nav__list">
          <li className="nav__list-item">About</li>
          <li className="nav__list-item">Projects</li>
          <li className="nav__list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
