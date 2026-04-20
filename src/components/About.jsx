import React from "react";
import "./About.css";

const highlights = [
"Passionate about C++ for systems programming and performance-critical applications",
"Proficient in modern web stack including React, Node.js, and responsive design",
"Strong expertise in database management, optimization, and data modeling"
];

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <p className="about__label">About Me</p>
        <h2 className="about__title">
           Building innovative and<span className="gradient-text"> provinding great solutions</span>
        </h2>
        <p className="about__description">
        I'm a full-stack developer specializing in building scalable web applications with Node.js backends and React frontends. 
        My expertise spans RESTful API design, asynchronous programming with async/await, and middleware integration in Express.js.
         On the frontend, I create dynamic, responsive UIs with React hooks, state management, and component optimization. 
         For data persistence, I design efficient MySQL schemas, write optimized queries, and implement proper indexing strategies.
          I'm passionate about writing clean, maintainable code and delivering high-performance solutions that provide excellent user experiences.
        </p>
        <div className="about__highlights">
          {highlights.map((item, i) => (
            <div key={i} className="about__highlight glass-card">
              <span className="about__highlight-icon">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
