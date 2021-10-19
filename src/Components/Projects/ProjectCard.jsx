import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({ name, logo, image, tag }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="tag">{tag}</div>
      <img src={logo} alt={`${name} logo`} className="logo" />
      <div className="name">{name}</div>
    </div>
  );
};

export default ProjectCard;
