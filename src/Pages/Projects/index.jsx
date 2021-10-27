import React from "react";
import Projects from "../../Components/Projects";

// importing framer motion
import { motion } from "framer-motion";

const SingleProjects = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="full-page">
        <Projects />
      </div>
    </motion.div>
  );
};

export default SingleProjects;
