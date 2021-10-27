import React from "react";

// importing style
import "./style.css";

// importing react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useLocation,
} from "react-router-dom";

// importing framer motion
import { AnimatePresence } from "framer-motion";

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
  // const loc = useLocation();
  return (
    <Router>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/project/:id" exact component={Project} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      {/* footer */}
      <Footer />
    </Router>
  );
};

export default App;
