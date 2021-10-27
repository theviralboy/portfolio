import React, { useState } from "react";

// importing style
import "./style.css";

// importing use params
import { useParams, useHistory } from "react-router-dom";

// importing firebase
import { firestore } from "../../Firebase/config";
import { onSnapshot, doc } from "@firebase/firestore";

const SingleProject = () => {
  const { id } = useParams();
  const history = useHistory;
  const [project, setProject] = useState({});
  const [stack, setStack] = useState([]);
  const unsub = onSnapshot(doc(firestore, "projects", `${id}`), (doc) => {
    setProject(doc.data());
    setStack(project?.Stack);
  });
  // .then((res) => console.log(res))
  // .catch((err) => {
  //   console.log(err);
  //   history.push("/NotFound");
  // });
  return (
    <div className="full-page">
      <section className="project-area">
        {project !== {} ? (
          <div className="container">
            <div className="row">
              <div className="col-12 project-image">
                <img src={project?.Image} alt={project?.Name} />
                <a
                  className="open"
                  target="_blank"
                  rel="noreferrer"
                  title="Preview"
                  href={project?.URL}
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
              <div className="col-12">
                <h1 className="project-name">{project?.Name}</h1>
                <p className="project-desc">{project?.Desc}</p>
                <div className="project-stack flex">
                  <h3>Technologies Used :</h3>
                  <ul className="stack-list">
                    {stack?.map((item, index) => {
                      return (
                        <li key={index} className="stack-item">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="project-btns flex">
                  <a
                    href={project?.Code}
                    className="project-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github btn-icon"></i>
                    Source Code
                  </a>
                  <a
                    href={project?.URL}
                    className="project-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-eye btn-icon"></i>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};

export default SingleProject;
