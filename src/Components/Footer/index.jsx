import React from "react";

// importing style
import "./style.css";

import { Link } from "react-router-dom";

import { SocialMedia } from "../Header";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer-area">
      <div className="wrapper">
        <div className="row flex">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo ">
                <Link to="/">
                  <img
                    src="https://sahilverma.ml/assets/images/logo-light.png"
                    alt="Logo images"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner justify-center">
              <SocialMedia />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-center">
              <div className="text text-center">
                <p>
                  Copyright {` ${date.getFullYear()} `}
                  <a
                    href="https://instagram.com/sahilverma.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sahil Verma
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
