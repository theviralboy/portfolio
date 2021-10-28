import React from "react";

// importing components
import Hero from "../../Components/Hero";
import About from "../../Components/About";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <>
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* skills */}
      <Skills />
      {/* projects */}
      <Projects />
      {/* </Switch> */}
      <Contact />
    </>
  );
};

export default Home;
