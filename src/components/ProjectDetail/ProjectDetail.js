import React, { useEffect } from "react";
import Aos from "aos";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import Tag from "../Tag/Tag";
import "./ProjectDetail.scss";
import "aos/dist/aos.css";

const ProjectDetail = ({ project }) => {
  const { title, description, techStack, videoUrl, demoUrl, gitHubUrl, image } =
    project;

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <article className="project" data-aos="fade-right">
      <div className="project__image">
        <img src={image} alt="bookself" />
        <div className="project__buttons">
          {videoUrl && (
            <a
              href={videoUrl}
              className="project__button"
              target="_blank"
              rel="noreferrer"
            >
              Video <MdOndemandVideo size={20} />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              className="project__button"
              target="_blank"
              rel="noreferrer"
            >
              Demo <BsBoxArrowUpRight />
            </a>
          )}
          {gitHubUrl && (
            <a
              href={gitHubUrl}
              className="project__button"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <AiFillGithub size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="project__info">
        <h3 className="project__title">{title}</h3>
        <div className="divider"></div>
        <p className="project__description">{description}</p>
        <p className="project__tech-stack">
          {techStack.map((item, index) => {
            return <Tag key={item + index}>{item}</Tag>;
          })}
        </p>
      </div>
    </article>
  );
};

export default ProjectDetail;
