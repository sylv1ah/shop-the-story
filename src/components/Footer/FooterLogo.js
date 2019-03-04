import React from 'react';
import bottomlogo from '../../assets/images/bottomlogo.gif';
import './Footer.css';
import { Link } from 'react-router-dom';

const FooterLogo = () => (
    <div className="footer">
        
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
        <div className="bottomlogo">
        <Link to="/"><img src={bottomlogo} alt='shop-the-story' style={{width: '300px'}}/></Link>
        </div>
    </div>
);

export default FooterLogo;