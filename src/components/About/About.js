import React from "react";
import profile from "../../assets/profile-2.jpeg";
import Skills from "../Skills/Skills";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <p className="about__subtitle">
        Hi there! I am Phoebe. <br /> A full stack web developer based in
        Vancouver, Canada.
      </p>
      <img src={profile} alt="profile" className="about__img" />
      <p>
        <span className="about__highlight">A little bit about myself - </span> I
        switched my career and relocated to a new country during pandemic. After
        several months of self-learning and joined BrainStation Web Development
        bootcamp
      </p>
      <Skills />
    </section>
  );
};

export default About;
