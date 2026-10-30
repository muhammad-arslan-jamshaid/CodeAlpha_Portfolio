import "./Projects.css";
import Daraz from "../../assets/DarazClone.png";
import Store from "../../assets/Screenshot 2024-02-02 205422.png";
import Portfolio from "../../assets/My-Portfolio.png";
import Limelight from "../../assets/LimelightClone.png";
import KFC from "../../assets/KFCclone.png";
import Portfolio2 from "../../assets/Portfolio2.png";

const Projects = () => {
  return (
    <>
      <div className="projectMain">
        <div id="projectTitle">
          <h1 className="projectHeading"> My Projects</h1>
        </div>

        <p className="projectDesc">
          Here are some of My Projects based on{" "}
          <span>
            {" "}
            <a
              className="reactTitle"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>
          </span>
          !
        </p>
        <div className="projectsImages">
          <img className="projectImg" src={Daraz} alt=" Website" />
          <img className="projectImg" src={Portfolio} alt=" Website" />
          <img className="projectImg" src={KFC} alt=" Website" />
          <img className="projectImg" src={Store} alt=" Website" />
          <img className="projectImg" src={Limelight} alt=" Website" />
          <img className="projectImg" src={Portfolio2} alt=" Website" />
        </div>
      </div>
    </>
  );
};

export default Projects;
