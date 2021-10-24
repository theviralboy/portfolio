import React from "react";

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

const App = () => {
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
      <Footer />
    </Router>
  );
};

export default App;
