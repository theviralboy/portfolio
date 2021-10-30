import React from "react";
import image from "../../Components/About/about.jpg";

const SingleAbout = () => {
  return (
    <div className="full-page">
      <section className="about-area ">
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="thumbnail">
                  <img className="w-100" src={image} alt="About Images" />
                </div>
              </div>
              <div className="col-12">
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
    </div>
  );
};

export default SingleAbout;
