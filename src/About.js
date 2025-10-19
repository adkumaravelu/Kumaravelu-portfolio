import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-card">
        <p>
          I'm <strong>Kumaravelu</strong>, a passionate software developer with a
          Master of Computer Applications (MCA) from <strong>SVCET, Chittoor</strong>.
          I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </p>

        <div className="highlight-boxes">
          {/* Full Stack Course First */}
          <div className="highlight">
            <h4>💻 Full Stack Developer Course</h4>
            <p>
              I completed a <strong>Full Stack Java Developer</strong> course, where I gained hands-on experience with technologies like 
              <strong> Java, Spring Boot, SQL, HTML/CSS, JavaScript, and React</strong>. This practical training helped me build end-to-end applications and strengthened my confidence in full-stack development.
            </p>
          </div>

          {/* MCA Education */}
          <div className="highlight">
            <h4>🎓 Academic Background</h4>
            <p>
              My <strong>MCA</strong> from <strong>SVCET, Chittoor</strong> gave me a solid foundation in computer science fundamentals.
              I studied key subjects like <strong>Data Structures, Operating Systems, DBMS</strong>, and <strong>Software Engineering</strong> that helped me understand the underlying principles of software development.<br /><br />
              It improved my analytical thinking, problem-solving, and structured approach to system design.
            </p>
          </div>

          {/* ChatGPT & Learning */}
          <div className="highlight">
            <h4>🧠 Learning & Growth</h4>
            <p>
              🚀 I’m continuously learning through hands-on coding and exploration. Tools <strong>AI</strong> have been an essential part of my journey — helping me debug, research, and keep up with the fast-paced tech world.
            </p>
          </div>
        </div>

        <p>
          I’m always eager to explore new technologies and take on challenging projects. Whether it’s frontend or backend, I strive to build clean, efficient, and user-friendly applications.<br />
          <strong>Let’s collaborate and build something impactful!</strong>
        </p>

        {/* ✅ Download CV Button */}
        <a
          href="/Kumaravelu_CV.pdf"  // 👉 Ensure this file is in the public folder
          download
          className="download-cv-button"
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
