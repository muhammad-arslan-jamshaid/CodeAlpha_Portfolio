import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="servicesMain">
        <div id="servicesTitle">
          <h1 className="servicesHeading">Services</h1>
        </div>

        <div className="servicesContainer">
          <div className="servicesCard">Custom Website Development</div>
          <div className="servicesCard">Frontend Development</div>
          <div className="servicesCard">Website Management</div>
          <div className="servicesCard">Wordpress Development</div>
        </div>
      </div>
    </>
  );
};

export default Services;
