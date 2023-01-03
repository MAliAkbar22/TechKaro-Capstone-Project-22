import React from 'react'
import './HeroStyle.css'
import HeroRightImage from '../../Images/hero-img.png'

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="container">
            <div className="hero-container">
                <div className="hero-left">
                    <h1>We provide Remote Health Care Services</h1>
                    <p>Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                    <p>Checkout Our App</p>
                    <button>Play Store</button>
                    <button>App Store</button>
                    <p>Have question? <a href="#home">Please contact us</a></p>
                </div>
                <div className="hero-right">
                    <img src={HeroRightImage} alt="Hero-Img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero