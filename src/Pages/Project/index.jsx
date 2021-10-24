import React from "react";

// importing style
import "./style.css";

import { useParams } from "react-router-dom";

const SingleProject = () => {
  const { id } = useParams();
  return (
    <div className="full-page">
      <section className="project-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 project-image">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Mb-__v1H--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0sh3c8yj68dmnzibfo92.png"
                alt="spotify"
              />
              <a
                className="open"
                target="_blank"
                rel="noreferrer"
                href="https://spotify-clone-sahilverma.netlify.app/"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div className="col-12 col-lg-7">
              <h1 className="project-name">Spotify Clone</h1>
              <p className="project-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                dolor fugit delectus. Hic officia doloremque nulla, voluptas
                dolor ad facere, sint provident corporis, qui aliquid?
              </p>
              <div className="project-stack flex">
                <h3>Technologies Used :</h3>
                <ul className="stack-list">
                  <li className="stack-item">React Js</li>
                  <li className="stack-item">Firebase</li>
                </ul>
              </div>
              <div className="project-btns flex">
                <a
                  href="https://github.com/theviralboy/spotify-clone"
                  className="project-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github btn-icon"></i>
                  Source Code
                </a>
                <a
                  href="https://spotify-clone-sahilverma.netlify.app/"
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
      </section>
    </div>
  );
};

export default SingleProject;
