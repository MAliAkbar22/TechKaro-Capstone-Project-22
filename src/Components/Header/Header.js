import React from "react";
import "./HeaderStyle.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
// import phone from '../../Images/phone.png'
import { FaPhoneAlt, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Solutions</Link>
              </li>
              <li>
                <Link to="/Cart">Resources</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <div className="phone-btn">
            <div className="phone-icon">
              <FaPhoneAlt />
            </div>
            <p className="phone-number">+92(000) 984 2020</p>
          </div>
          <div className="header-btn">
            <button className="appointment-btn">Appointment</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
