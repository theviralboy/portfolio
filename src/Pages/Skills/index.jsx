import React from "react";

import { SkillCard } from "../../Components/Skills";
import SkillData from "../../Components/Skills/SkillsData";

const SingleSkills = () => {
  return (
    <div
      className="full-page"
      style={{
        marginTop: "50px",
      }}
    >
      <section>
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
    </div>
  );
};

export default SingleSkills;
