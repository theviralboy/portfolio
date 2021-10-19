import React from "react";

// importing style
import "./style.css";

const Contact = () => {
  return (
    <section className="contact-area">
      <div className="contact-form">
        <div className="container">
          <div className="row flex">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="subtitle">Let's Say Hi</span>
                <h2 className="title">Hire Me.</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <span>Contact Email:</span>
                    <a
                      className="link"
                      href="mailto:sahilverma.webdev@gmail.com"
                    >
                      sahilverma.webdev@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-wrapper">
                <form
                  id="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="loading">
                    <div className="loading-bar">
                      <div className="loading-inner"></div>
                    </div>
                  </div>
                  <div id="alert-msg"></div>
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Message Titile" />
                  <input type="email" placeholder="Your Email" />
                  <textarea
                    data-aos="fade-right"
                    name="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    className="aos-init aos-animate"
                  ></textarea>
                  <div className="form-submit">
                    <button
                      data-aos="fade-right"
                      name="submit"
                      type="submit"
                      id="submit"
                      className="btn-default aos-init aos-animate"
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div
                className="thumbnail aos-init aos-animate"
                data-aos="fade-left"
              >
                <img
                  src="https://sahilverma.ml/assets/images/contact.jpg"
                  alt="Sahil Verma"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
