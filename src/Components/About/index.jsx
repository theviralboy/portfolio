import React from "react";
// importing style
import "./style.css";

const About = () => {
  return (
    <section className="about max-width">
      <div className="section-title">
        <span className="subtitle">My About Details</span>
        <h2 className="title">About Me</h2>
      </div>
      <div className="inner-content">
        <div className="thumbnail">
          <img
            src="https://sahilverma.ml/assets/images/about.jpg"
            alt="About Images"
          />
        </div>
        <div>
          <p className="description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
