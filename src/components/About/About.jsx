import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutMain">
      <div id="aboutTitle">
        <h1 className="aboutHeading">About Me</h1>
      </div>
      <div className="aboutSection">
        <p className="aboutDesc">
          Hi! I'm{" "}
          <a
            href="https://www.linkedin.com/in/muhammad-arslan-041b4327a/"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutName"
          >
            Muhammad Arslan
          </a>
          , a passionate{" "}
          <span className="aboutSkill">FrontEnd Web Developer</span> eager to
          turn ideas into interactive and seamless digital experiences. Armed
          with a robust skill set in front-end technologies, I specialize in
          crafting intuitive user interfaces using modern frameworks like{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="React"
          >
            React.js
          </a>
          . Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
