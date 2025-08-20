import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Java", icon: "☕" },
    { name: "PHP", icon: "🐘" },
    { name: "SQL", icon: "🗃️" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
