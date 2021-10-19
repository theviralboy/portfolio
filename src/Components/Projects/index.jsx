import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectsData";

// importing style
import "./style.css";

const Projects = () => {
  return (
    <section className="projects">
      <div className="contaienr">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center ">
              <span className="subtitle">My Complete project</span>
              <h2 className="title">My Latest Project</h2>
              <p className="description">
                There are many variations of passages of Lorem Ipsum available,{" "}
                <br /> but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="projects-inner">
          <div className="container">
            <div className="row">
              {projectData.map((project) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    key={project.Id}
                  >
                    <ProjectCard
                      image={project.Image}
                      name={project.Name}
                      logo={project.Logo}
                      tag={project.Stack[0]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
