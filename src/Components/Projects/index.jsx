import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

// importing react router dom
import { Link } from "react-router-dom";

// importing style
import "./style.css";

// imoprting firebase
import { firestore } from "../../Firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const dataRef = collection(firestore, "projects");
  getDocs(dataRef)
    .then((data) => {
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })
    .catch((err) => console.log(err));
  return (
    <section className="project-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center ">
              <span className="subtitle">My Complete project</span>
              <h2 className="title">My Latest Project</h2>
              <p className="description">
                Have a look at my recently projects.
              </p>
            </div>
          </div>
        </div>
        <div className="projects-inner">
          <div className="container">
            <div className="row">
              {projects?.map((project) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    key={project.Id}
                  >
                    <Link to={`/project/${project.Id}`}>
                      <ProjectCard
                        image={project.Image}
                        name={project.Name}
                        logo={project.Logo}
                        tag={project.Stack[0]}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container text-center">
          <Link to="/projects" className="more-project-btn">
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
