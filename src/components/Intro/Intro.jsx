import React from "react";
import "./Intro.css";
import background from "../../assets/BackgroundResized.jpg";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hi!</span>
          <span className="introText">
            I'm{" "}
            <a
              href="https://www.linkedin.com/in/muhammad-arslan-041b4327a/"
              target="_blank"
              rel="noopener noreferrer"
              className="introName"
            >
              Muhammad Arslan
            </a>
            <br />
            <span className="course">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true, // This tells the library to loop your custom sequence infinitely
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Web Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Frontend Developer")
                    .pauseFor(1000) // Added pause so the user can actually read the second string
                    .deleteAll() // Erases the second string before starting the next loop
                    .start();
                }}
              />
            </span>
          </span>
          <p className="introParagraph">
            I'm a passionate web developer with a little experience in creating
            user-friendly and responsive websites.
          </p>
          <div className="hirebtnlink">
            <Link
              to="contactTitle"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="hirebtn">Hire Me</button>
            </Link>
          </div>
        </div>
        <img src={background} alt="Profile" className="backgroundImg" />
      </section>
    </>
  );
};

export default Intro;
