import React from "react";
import "./Skills.css";

const skillCategories = [
  { title: "Programming Languages", skills: ["C++", "C#", "JavaScript"] },
  { title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
  { title: "Database Technologies", skills: ["MySQL", "MongoDB"] },
  { title: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code"] },
  { title: "Professional Strengths", skills: ["Problem Solving", "Communication", "Team Collaboration", "Adaptability"] },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="skills__label">My Skills</p>
        <h2 className="skills__title">
          Technologies & <span className="gradient-text-blue">Expertise</span>
        </h2>
        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skills__card glass-card">
              <h3 className="skills__card-title">{cat.title}</h3>
              <div className="skills__tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skills__tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
