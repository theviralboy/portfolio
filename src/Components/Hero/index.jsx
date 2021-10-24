import React from "react";
// importing style
import "./style.css";

//importing typewriter-effect
import Typewriter from "typewriter-effect";

// importing react router dom
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="inner-content">
        <div className="hero-inner">
          <span>Hello World!</span>
          <h1 className="title">
            I’m Sahil Verma. <br />
            <span>
              I am a{" "}
              <Typewriter
                options={{
                  strings: ["Developer", "Blogger", "Designer", "Freelancer"],
                  autoStart: true,
                  loop: true,
                }}
              />
              .
            </span>
          </h1>
          <h2>from India.</h2>
          <div className="slide-btn">
            <Link className="contact-me-btn" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
