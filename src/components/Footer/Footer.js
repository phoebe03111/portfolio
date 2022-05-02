import React from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Created by Phoebe Chang ✨ 2022</p>

      <a href="#header" className="back-to-top">
        <FaChevronCircleUp size={40} />
      </a>
    </footer>
  );
};

export default Footer;
