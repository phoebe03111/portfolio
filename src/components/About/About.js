import React from "react";
import profile from "../../assets/profile-2.jpeg";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__intro">
        <h1>Hi there! I am Phoebe.</h1>
        <h3>A full stack web developer based in Vancouver, Canada.</h3>
        <p style={{ textAlign: "justify" }}>
          <span className="about__highlight">A little bit about myself - </span>
          I started my journey by transitioning careers during the pandemic and
          relocating to a new country. I joined the BrainStation Web Development
          bootcamp, where I not only completed the program but also became a
          teaching assistant, helping aspiring developers achieve their goals.
          Currently I am working as a Full Stack Developer at{" "}
          <a
            href="https://www.ficklmarketing.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "underline" }}
          >
            Fickl
          </a>
          , where I contributed to the development of user-friendly and dynamic
          web application. I am passionate about staying up-to-date with the
          latest technologies and continuously enhancing my skills to deliver
          exceptional results.
        </p>
      </div>

      <img src={profile} alt="profile" className="about__img" />
    </section>
  );
};

export default About;
