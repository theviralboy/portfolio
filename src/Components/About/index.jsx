import React from "react";

// importing style
import "./style.css";

// importing image
import image from "./about.jpg";

const About = () => {
  return (
    <section className="about-area ">
      <div className="about-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img className="w-100" src={image} alt="About Images" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-inner inner">
                <div className="section-title">
                  <span className="subtitle">My About Details</span>
                  <h2 className="title">About Me</h2>
                  <p className="description ">
                    Hello, I am Sahil Verma. I am a frontend developer. I love
                    to code, learning new stuff and improving my self as a
                    developer and as a well as person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
