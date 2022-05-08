import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import './ProjectDetail.scss';

const ProjectDetail = ({project}) => {
  const { title, description, techStack, demoUrl, gitHubUrl, image } = project;
  return (
    <article className="project">
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
