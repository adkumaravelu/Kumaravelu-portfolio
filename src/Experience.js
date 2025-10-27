import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "4W Technology",
      role: "Software Developer",
      duration: "Nov 2024 – Present",
      responsibilities: [
        "Developed responsive web applications using PHP and JavaScript.",
        "Integrated RESTful APIs and optimized database queries for performance.",
        "Collaborated with designers and backend teams to deliver scalable features.",
      ],
    },
  ];

  return (
    <section id="Experience" className="experience-container">
      <h1 className="experience-title">Work Experience</h1>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2 className="experience-role">{exp.role}</h2>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-duration">{exp.duration}</p>

            <ul className="experience-responsibilities">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
