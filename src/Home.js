import React from "react";
import "./Home.css"; // optional CSS for animation

const Home = () => (
  <section id="home" className="home-hero">
    <h1>
      Hello <span className="wave">👋</span>, I'm <strong>Kumaravelu</strong>
    </h1>
    <p><span className="computer">💻</span> Software Developer</p> 
     <p>
      📞 9573595934 |
      {" "}
      📧 <a href="mailto:kumaraveluad@gmail.com">kumaraveluad@gmail.com</a> |
      {" "}
      🔗 <a href="https://linkedin.com/in/adkumaravelu-webdev" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
      {" "}
      💻 <a href="https://github.com/adkumaravelu" target="_blank" rel="noopener noreferrer">GitHub</a>
    </p>
    {/* <p>Welcome to my portfolio</p> */}
  </section>
);

export default Home;
