import React from "react";
import "./TelehealthStyle.css";
import TelehealthImg from "../../Images/telehealth.png";

const Telehealth = () => {
  return (
    <div>
      <div className="container">
        <div className="telehealth-container">
          <div className="telehealth-left-col">
            <h2>Telehealth</h2>
            <h1>Getting safe healthcare at home</h1>
            <p>
              Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus.
            </p>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
              sem. Vestibulum ante ipsum primis in.
            </p>
            <button className="telehealth-btn">Make An Appointment</button>
          </div>
          <div className="telehealth-right-col">
            <img src={TelehealthImg} alt="Telehealth-Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telehealth;
