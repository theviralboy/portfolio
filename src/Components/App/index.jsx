import React from "react";

// importing style
import "./style.css";

// importing react router dom
import { BrowserRouter as Router } from "react-router-dom";

// importing componenets
import Header from "../Header";
import Hero from "../Hero";
// import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import Projects from "../Projects";

const App = () => {
  return (
    <Router>
      {/* about */}
      <Header />
      {/* <Switch> */}
      {/* hero */}
      <Hero />
      {/* about */}
      {/* <About /> */}
      {/* projects */}
      <Projects />
      {/* </Switch> */}
      <Contact />
      {/* footer */}
      <Footer />
    </Router>
  );
};

export default App;
