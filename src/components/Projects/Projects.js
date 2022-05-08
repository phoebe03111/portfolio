import React from "react";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import projectsData from "../../data/projectsData.js";
import "./Projects.scss";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <section className="projects__container">
        {projectsData.map((project) => {
          return <ProjectDetail key={project.id} project={project} />;
        })}
      </section>
    </section>
  );
};

export default Projects;
