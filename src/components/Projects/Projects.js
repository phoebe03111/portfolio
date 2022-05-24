import React from "react";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import projectsData from "../../data/projectsData.js";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__subtitle">Hover over the images to see more links! 👀</p>

      <section className="projects__container">
        {projectsData.map((project) => {
          return <ProjectDetail key={project.id} project={project} />;
        })}
      </section>
    </section>
  );
};

export default Projects;
