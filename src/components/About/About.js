import React from "react";
import profile from "../../assets/profile-2.jpeg";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__intro">
        <h1>Hi there! I am Phoebe.</h1>
        <h3>A full stack web developer based in Vancouver, Canada.</h3>
        <p>
          <span className="about__highlight">A little bit about myself - </span>
          I switched my career and relocated to a new country during pandemic.
          After several months of self-learning, I joined BrainStation Web
          Development bootcamp and became a teaching assistant after graduation.
          I am passionate about learning new technologies to create projects, as
          well as building user-friendly and engaging websites and applications.
        </p>
      </div>

      <img src={profile} alt="profile" className="about__img" />
    </section>
  );
};

export default About;
