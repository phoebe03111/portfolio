import React, { useState } from "react";
import profile from "../../assets/profile-2.jpeg";
import Skills from "../Skills/Skills";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="about__title">Hi! I'm Phoebe</h1>
      <p className="about__subtitle">
        A full-stack developer based in Vancouver, Canada.
      </p>
      <img src={profile} alt="profile" className="profile-img" />
      <Skills />
    </section>
  );
};

export default About;
