import React, { useState } from "react";

// importing react router dom
import { Link } from "react-router-dom";

// importing components
import ProjectCard from "../../Components/Projects/ProjectCard";

// importing fireabse
import { firestore } from "../../Firebase/config";
import { collection, getDocs } from "firebase/firestore";

const SingleProjects = () => {
  const [projects, setProjects] = useState([]);
  const dataRef = collection(firestore, "projects");
  getDocs(dataRef)
    .then((data) => {
      setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })
    .catch((err) => console.log(err));
  return (
    <section
      className="projects"
      style={{
        marginTop: "30px",
      }}
    >
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
    </section>
  );
};

export default SingleProjects;
