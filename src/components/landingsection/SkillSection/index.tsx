import React from "react";
import "./styles.css";
import { skills } from "./data";
const index = () => {
  return (
    <div className="container mt-xxl-5 mb-5">
      <div className="row">
        <div className="col">
          <div className="skill-container">
            <div className="skill-title">Skills</div>
            <div className="skill-desc">
              {skills.map((skill, index) => {
                return (
                  <div className="skill-content">
                    <div className="logo-container">
                      <img src={skill.logo} alt={skill.name}></img>
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
