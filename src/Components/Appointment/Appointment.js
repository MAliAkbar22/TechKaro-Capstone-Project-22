import React from "react";
import "./AppointmentStyle.css";
import AppointmentImg from "../../Images/appointment.png";
import { FaUserAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Appointment = () => {
  return (
    <div>
      <div className="container">
        <div className="appointment-container">
          <div className="appointment-left">
            <img src={AppointmentImg} alt="Appointment-Img" />
          </div>
          <div className="appointment-right">
            <h3>Make An Appointment</h3>
            <h2>
              Contact us for any medical help and fill out an appointment form
            </h2>
            <form action="">
              <label>
                Full Name:
                <input type="text" name="name" />
                <FaUserAlt />
              </label>
              <label>
                Email Address:
                <input type="email" name="name" />
                <FaEnvelope />
              </label>
              <label>
                Phone Number:
                <input type="tel" name="name" />
                <FaPhoneAlt />
              </label>
              <label>
                Booking Date:
                <input type="date" name="name" />
              </label>
              <label>
                Department:
                <select value="Select Department">
                  <option value="">Department</option>
                  <option value="">Department1</option>
                  <option value="">Department2</option>
                  <option value="">Department2</option>
                </select>
              </label>
              <label>
                Doctor:
                <select value="Select Doctor">
                  <option value="">Docter</option>
                  <option value="">Doctor 1</option>
                  <option value="">Doctor 2</option>
                  <option value="">Doctor 2</option>
                </select>
              </label>
              <button className="confirm-btn">Confirm Appointment</button>
              <div className="checkboxes">
                <input type="checkbox" name="" id="" />
                Male
                <input type="checkbox" name="" id="" />
                Female
                <input type="checkbox" name="" id="" />
                Do not wish to disclose
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
