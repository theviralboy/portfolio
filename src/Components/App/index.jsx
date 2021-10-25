import React, { useState } from "react";

// importing style
import "./style.css";

// importing react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing components
import Header from "../Header";
import Footer from "../Footer";

// importing pages
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Skills from "../../Pages/Skills";
import Projects from "../../Pages/Projects";
import Project from "../../Pages/Project";
import Contact from "../../Pages/Contact";
import NotFound from "../../Pages/NotFound";
import TopIcon from "./TopIcon";

const App = () => {
  const [yValue, setYValue] = useState(0);
  window.onscroll = () => {
    console.log(yValue);
    setYValue(window.scrollY);
  };
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/project/:id" exact component={Project} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
      {/* footer */}
      <div
        className={`back-to-top ${yValue > 1000 ? "visible" : "hello"}`}
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <TopIcon />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
