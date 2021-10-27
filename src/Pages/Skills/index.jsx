import React from "react";
import Skills from "../../Components/Skills";

import { SkillCard } from "../../Components/Skills";
import SkillData from "../../Components/Skills/SkillsData";

const SingleSkills = () => {
  return (
    <section
      className="full-page"
      style={{
        marginTop: "50px",
      }}
    >
      <div className="container">
        <div className="row">
          {SkillData.map((skill) => {
            return (
              <div className=" col-md-4 col-6 p-0" key={skill.id}>
                <SkillCard name={skill.name} icon={skill.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SingleSkills;
