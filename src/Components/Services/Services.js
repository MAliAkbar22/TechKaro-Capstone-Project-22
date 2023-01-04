import React from "react";
import "./ServicesStyle.css";
import ServiceImg1 from "../../Images/service-1.png";
import ServiceImg2 from "../../Images/service-2.png";
import ServiceImg3 from "../../Images/service-3.png";
import ServiceImg4 from "../../Images/service-4.png";
import ServiceImg5 from "../../Images/service-5.png";
import ServiceImg6 from "../../Images/service-6.png";
import ServiceImg7 from "../../Images/service-7.png";
import ServiceImg8 from "../../Images/service-8.png";
import ServiceImg9 from "../../Images/service-9.png";

const Services = () => {
  return (
    <div className="services-section">
      <div className="container">
        <div className="service-container">
          <h3>Our Services</h3>
          <h2>Tele Health Professional Services</h2>
          <div className="service-row1">
            <div className="service-card">
              <img src={ServiceImg1} alt="Service-Img" />
              <h2>Ambulance Services</h2>
            </div>
            <div className="service-card">
              <img src={ServiceImg2} alt="Service-Img" />
              <h2>Blood Bank</h2>
            </div>
            <div className="service-card">
              <img src={ServiceImg3} alt="Service-Img" />
              <h2>Chemist Online</h2>
            </div>
          </div>
          <div className="service-row2">
            <div className="service-card">
              <img src={ServiceImg4} alt="Service-Img" />
              <h2>Diagnostic Reports</h2>
            </div>
            <div className="service-card">
              <img src={ServiceImg5} alt="Service-Img" />
              <h2>Fitness Exercises</h2>
            </div>
            <div className="service-card">
              <img src={ServiceImg6} alt="Service-Img" />
              <h2>Health Insurance</h2>
            </div>
          </div>

          <div className="service-row3">
            <div className="service-card">
              <img src={ServiceImg7} alt="Service-Img" />
              <h2>Home Care</h2>
            </div>
            <div className="service-card">
              <img src={ServiceImg8} alt="Service-Img" />
              <h2>Medical Equipments</h2>
            </div>
            <div className="service-card">
              <img src={ServiceImg9} alt="Service-Img" />
              <h2>General Physician</h2>
            </div>
          </div>
          <button className="service-btn">See All Services</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
