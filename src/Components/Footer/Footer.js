import React from "react";
import "./FooterStyle.css";
import {
  FaGooglePlay,
  FaApple,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import FooterLogo from "../../Images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-site-col">
            <img src={FooterLogo} alt="Footer-Logo" />
            <p>
              Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere
              blandit. vivamus suscipit tortor ege.
            </p>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
          <div className="footer-contacts-col">
            <h2>Contacts Info</h2>
            <p>Address: 312 Clinton Circle Atlantic City, M2 080522</p>
            <p>Phone: +92(000) 984 2020</p>
            <p>Email: info@domain.com</p>
            <p>Time: Every day 24 hours</p>
          </div>
          <div className="footer-links-col">
            <h2>Quick Link</h2>
            <ul>
              <li>
                <a href="#home">About Us</a>
              </li>
              <li>
                <a href="#home">Services</a>
              </li>
              <li>
                <a href="#home">Contact Us</a>
              </li>
              <li>
                <a href="#home">Privacy Policy</a>
              </li>
              <li>
                <a href="#home">Terms of service</a>
              </li>
            </ul>
          </div>
          <div className="footer-apps-col">
            <h2>Apps Download</h2>
            <p>
              Download today and get your free copy from Apple and Play Store
            </p>
            <button className="footerplaystore-btn">
              <FaGooglePlay /> Play Store
            </button>
            <button className="footerappstore-btn">
              <FaApple /> App Store
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-copyright">
          <p>Copyright @ 2022 Tele Health. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
