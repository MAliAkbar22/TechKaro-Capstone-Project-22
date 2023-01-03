import React from 'react'
import './FeatureStyle.css'
import fimg1 from '../../Images/what-img1.png'
import fimg2 from '../../Images/what-img2.png'
import fimg3 from '../../Images/what-img3.png'
import fimg4 from '../../Images/what-img4.png'

const Feature = () => {
    return (
        <div className="feature-container">
            <div className="container">
                <div className="feature-text">
                    <p>What We Do</p>
                    <h1>Features Providers and Patients Love</h1>
                </div>
                <div className="feature-cards">
                    <div className="card">
                        <img src={fimg1} alt="Feature-Img" />
                        <h1>24/7 Support</h1>
                        <p>Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Quisque velit nisi pretium ut lacinia in elementum id enim.</p>
                    </div>
                    <div className="card">
                        <img src={fimg2} alt="Feature-Img" />
                        <h1>Maximize Revenue</h1>
                        <p>Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Quisque velit nisi pretium ut lacinia in elementum id enim.</p>
                    </div>
                    <div className="card">
                        <img src={fimg3} alt="Feature-Img" />
                        <h1>Health Plans</h1>
                        <p>Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Quisque velit nisi pretium ut lacinia in elementum id enim.</p>
                    </div>
                    <div className="card">
                        <img src={fimg4} alt="Feature-Img" />
                        <h1>Intuitive Scheduling</h1>
                        <p>Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Quisque velit nisi pretium ut lacinia in elementum id enim.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature