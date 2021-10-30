import React from "react";

// importing skill data
import SkillData from "./SkillsData";

// importing styles
import "./style.css";

export const SkillCard = ({ icon, name }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} className="skill-icon" />
      <p className="skill-name">{name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">Let's Say Hi</span>
              <h2 className="title">My Skills</h2>
              <p className="description">Have a look at my skills.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-inner">
        <div className="container-fluid">
          <div className="row">
            {SkillData.map((skill) => {
              return (
                <div className="col-lg-2 col-md-4 col-6 p-0" key={skill.id}>
                  <SkillCard name={skill.name} icon={skill.icon} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
