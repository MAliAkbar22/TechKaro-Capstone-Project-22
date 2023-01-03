import React from 'react'
import './HeaderStyle.css'
import logo from '../../Images/logo.png'
import phone from '../../Images/phone.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-container">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#home">About</a></li>
                            <li><a href="#home">Services</a></li>
                            <li><a href="#home">Solutions</a></li>
                            <li><a href="#home">Resources</a></li>
                            <li><a href="#home">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className="search-box">
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="phone-btn">
                            <img className="phone-icon" src={phone} alt="Phone-Img" />
                            <p className="phone-number">+92(000) 984 2020</p>
                    </div>
                    <div className="header-btn">
                        <button className='appointment-btn'>Appointment</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header