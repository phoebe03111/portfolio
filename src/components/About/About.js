import React from "react";
import profile from "../../assets/profile-2.jpeg";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <h1>Hi! I'm Phoebe</h1>
      <h2>A full-stack developer based in Vancouver, Canada.</h2>
      <img src={profile} alt="profile" className="profile-img" />

      <div>
        <p>Skillsets</p>
        <ul className="skills__list">
          <li className="skills__list-item">
            <FaHtml5 size={50} /> HTML5
          </li>
          <li className="skills__list-item">
            <FaCss3Alt size={50} /> CSS3
          </li>
          <li className="skills__list-item">
            <FaSass size={50} /> Sass
          </li>
          <li className="skills__list-item">
            <SiJavascript size={50} /> Javascript
          </li>
          <li className="skills__list-item">
            <FaReact size={50} /> React
          </li>
          <li className="skills__list-item">
            <DiNodejs size={50} /> Node.js
          </li>
          <li className="skills__list-item">
            <SiMongodb size={50} /> MongoDB
          </li>
          <li className="skills__list-item">
            <FaDatabase size={50} /> mySQL
          </li>
          <li className="skills__list-item">
            <AiFillGithub size={50} /> git
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
