import React from "react";
// importing style
import "./style.css";

const About = () => {
  return (
    <section className="about-area ptb--120  ">
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35">
            <div className="col-lg-5">
              <div
                className="thumbnail aos-init aos-animate"
                data-aos="fade-left"
              >
                <img
                  className="w-100"
                  src="https://sahilverma.ml/assets/images/about.jpg"
                  alt="About Images"
                />
              </div>
            </div>
            <div
              className="col-lg-7 aos-init aos-animate"
              data-aos="fade-right"
            >
              <div className="about-inner inner">
                <div className="section-title">
                  <span className="subtitle">My About Details</span>
                  <h2 className="title mb--20">About Me</h2>
                  <p className="description mt_dec--20">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered in some form, by
                    injected humour.
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
