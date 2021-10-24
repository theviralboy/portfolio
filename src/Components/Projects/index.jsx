import React /*, { useEffect, useState }*/ from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectsData";

// importing react router dom
import { Link } from "react-router-dom";

// importing style
import "./style.css";

// imoprting firebase
// import { firestore } from "../../Firebase/config";
// import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  // const [data, setData] = useState([]);
  // const dataRef = collection(firestore, "test");
  // useEffect(() => {
  //   const getData = async () => {
  //     let name = await getDocs(dataRef);
  //     setData(name.docs.map((doc) => ({ id: doc.id, ...doc.data().name })));
  //     console.log(data);
  //   };
  //   getData();
  // }, []);
  return (
    <section className="project-area">
      <div className="container">
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
