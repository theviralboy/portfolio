import React from "react";

// importing styles
import "./style.css";

// importing react-router-dom
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="full-page">
      <section className="not-found">
        <div className="not-found-404">404</div>
        <h1>Oops! Page Not Found.</h1>
        <p className="not-found-desc">
          Sorry, the you are looking for is not exists. You can go back to home.
        </p>
        <Link to="/" className="not-found-btn">
          <i className="fa fa-home"></i>Go Back Home
        </Link>
      </section>
    </div>
  );
};

export default NotFound;
