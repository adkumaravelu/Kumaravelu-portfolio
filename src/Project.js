import React from "react";
import "./Project.css";

import studentImg from "./assets/images/Catring-Service.jpg";
import portfolioImg from "./assets/images/portfolio.png";
import ecommerceImg from "./assets/images/ecommerce-api.png";

const Project = () => {
  return (
<section id="projects" className="project-section">
      <h2 className="project-title">Projects</h2>
      <div className="project-grid">

        <div className="project-card">
          <img src={studentImg} alt="Student Management" className="project-image" />
          <h3>Catering Service</h3>
          <p>
            A web app built using Php, Html, Css , JavaScript, MySQL to manage catering service data with CRUD features and login.
          </p>
          <a href="https://github.com/adkumaravelu/catering_service" target="_blank" rel="noopener noreferrer" className="project-button">
            🔗 View Project
          </a>
        </div>

        <div className="project-card">
          <img src={portfolioImg} alt="Portfolio Website" className="project-image" />
          <h3>Personal Portfolio</h3>
          <p>
            A responsive portfolio site built with React showcasing my skills, resume, and featured projects.
          </p>
          <a href="https://adkumar-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-button">
            🔗 View Project
          </a>
        </div>

        <div className="project-card">
          <img src={ecommerceImg} alt="E-commerce API" className="project-image" />
          <h3>E-commerce API</h3>
          <p>
            A RESTful API built with Spring Boot and Hibernate for managing products, users, and orders in an online store.
          </p>
          <a href="https://your-ecommerce-link.com" target="_blank" rel="noopener noreferrer" className="project-button">
            🔗 View Project
          </a>
        </div>

      </div>
    </section>
  );
};

export default Project;
