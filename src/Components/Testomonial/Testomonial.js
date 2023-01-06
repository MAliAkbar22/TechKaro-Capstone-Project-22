import React from "react";
import "./TestomonialStyle.css";
import TestomonialImg1 from "../../Images/client-main.png";
import TestomonialC1 from "../../Images/client-1.png";
import TestomonialC2 from "../../Images/client-2.png";
import TestomonialC3 from "../../Images/client-3.png";
import TestomonialC4 from "../../Images/client-4.png";
import TestomonialC5 from "../../Images/client-5.png";

const Testomonial = () => {
  return (
    <div className="testomonial-section">
      <div className="container">
        <div className="testomonial-container">
          <div className="testomonial-clients">
            <img
              src={TestomonialC1}
              alt="Testomonial-Client-Img"
              className="c1"
            />
            <img
              src={TestomonialC2}
              alt="Testomonial-Client-Img"
              className="c2"
            />
            <img
              src={TestomonialC3}
              alt="Testomonial-Client-Img"
              className="c3"
            />
            <img
              src={TestomonialC4}
              alt="Testomonial-Client-Img"
              className="c4"
            />
            <img
              src={TestomonialC5}
              alt="Testomonial-Client-Img"
              className="c5"
            />
          </div>
          <h3>Testimonial</h3>
          <h2>What Our Client Say About Us</h2>
          <div className="testomonial-img">
            <img
              src={TestomonialImg1}
              alt="Testomonial-Img"
              className="main-img"
            />
          </div>

          <p>
            “Proin eget tortor risus. Mauris blandit aliquet elit, eget
            tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Donec sollicitudin molestie malesuada.
            Mauris blandit aliquet elit eget”
          </p>
          <h4>McDonald Smith</h4>
          <h5>CEO & Founder</h5>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
