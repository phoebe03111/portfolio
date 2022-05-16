import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { DiNodejs, DiGit } from "react-icons/di";
import { randomSelect } from "../../util/util";
import "./Skills.scss";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Skillsets</h2>
      
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
          <SiJavascript size={45} /> Javascript
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
          <FaDatabase size={40} /> mySQL
        </li>
        <li className="skills__list-item">
          <DiGit size={50} /> git
        </li>
      </ul>

      <button onClick={randomSelect} className='skills__button'>Click me!</button>
    </section>
  );
};

export default Skills;
