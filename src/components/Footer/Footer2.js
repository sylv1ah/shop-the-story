import React from 'react';
import './Footer.css';
import smalllogo from '../../assets/images/bottomlogo.gif';

const Footer2 = () => (
    <div className="footer">
        <div className="smallbottomlogo"><img src={smalllogo} alt='shop-the-story'/></div>
        <div className="text">
            <p>Sign up for updates and recieve 10% off online! Enter your email to get updates straight in your inbox</p>
        </div>
        <div>
            <div className="form">
            
                <div><input className="firstName"placeholder="First Name"></input></div>
                <div><input placeholder="Last Name"></input></div>
                <div><input placeholder="Email"></input></div>
                <div><button>Subscribe</button></div>
            
            </div>
        </div>
    </div>
);

export default Footer2;