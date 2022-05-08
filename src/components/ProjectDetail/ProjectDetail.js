import React, { useEffect } from "react";
import Aos from "aos";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import "./ProjectDetail.scss";
import "aos/dist/aos.css";

const ProjectDetail = ({ project }) => {
  const { title, description, techStack, demoUrl, gitHubUrl, image } = project;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <article className="project" data-aos="fade-right">
      <div className="project__image">
        <img src={image} alt="bookself" />
        <div className="project__buttons">
          <a
            href={demoUrl}
            className="project__button"
            target="_blank"
            rel="noreferrer"
          >
            Demo <BsBoxArrowUpRight />
          </a>
          <a
            href={gitHubUrl}
            className="project__button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <AiFillGithub />
          </a>
        </div>
      </div>

      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        <p className="project__tech-stack">Built with: {techStack}</p>
      </div>
    </article>
  );
};

export default ProjectDetail;
