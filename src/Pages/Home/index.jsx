import React from "react";

// importing framer motion
import { motion } from "framer-motion";

// importing components
import Hero from "../../Components/Hero";
import About from "../../Components/About";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";
import Contact from "../../Components/Contact";

const Home = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

export default Home;
