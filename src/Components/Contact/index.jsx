import React, { useState } from "react";

// importing style
import "./style.css";

// importing firebase
import { firestore } from "../../Firebase/config";
import { collection, addDoc } from "firebase/firestore";

// importing image
import image from "./contact.jpg";

const LoadingBar = () => {
  return (
    <div className="loading">
      <div className="loading-bar">
        <div className="loading-inner"></div>
      </div>
    </div>
  );
};

const Contact = () => {
  const contactRef = collection(firestore, "contact");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formActive, setFormActive] = useState(true);

  // alerts popups
  const [alertMsg, setAlertMsg] = useState("");
  const [alertClass, setAlertClass] = useState("");
  return (
    <section className="contact-area">
      <div className="contact-form">
        <div className="container">
          <div className="row flex">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="subtitle">Let's Say Hi</span>
                <h2 className="title">Contact Me.</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <span>Contact Email:</span>
                    <a
                      className="link"
                      href="mailto:sahilverma.webdev@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      sahilverma.webdev@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-wrapper">
                {formActive ? "" : <LoadingBar />}
                <form
                  id="contact-form"
                  className={formActive ? "" : "inactive"}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (
                      name !== "" &&
                      title !== "" &&
                      email !== "" &&
                      message !== ""
                    ) {
                      setFormActive(false);

                      addDoc(contactRef, { name, title, email, message })
                        .then((res) => res.json)
                        .then((data) => {
                          setFormActive(true);
                          setAlertClass("success");
                          setAlertMsg("Thanks for contacting me.");
                          setName("");
                          setTitle("");
                          setEmail("");
                          setMessage("");
                        })
                        .catch((err) => {
                          console.log("ERROR", err);
                          setFormActive(true);
                          setAlertClass("danger");
                          setAlertMsg("Failed to contact! Try again.");
                        });
                    }
                  }}
                >
                  {alertMsg !== "" ? (
                    <div id="alert-msg" className={`alert alert-${alertClass}`}>
                      {alertMsg}
                    </div>
                  ) : (
                    ""
                  )}

                  <input
                    type="text"
                    onChange={({ target }) => setName(target.value)}
                    value={name}
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    onChange={({ target }) => setTitle(target.value)}
                    value={title}
                    placeholder="Message Title"
                  />
                  <input
                    type="email"
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                    placeholder="Your Email"
                  />
                  <textarea
                    onChange={({ target }) => setMessage(target.value)}
                    value={message}
                    placeholder="Your Message"
                  ></textarea>
                  <div className="form-submit">
                    <button
                      type="submit"
                      className="btn-default"
                      disabled={
                        name !== "" &&
                        title !== "" &&
                        email !== "" &&
                        message !== ""
                          ? false
                          : true
                      }
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="thumbnail ">
                <img src={image} alt="Sahil Verma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
