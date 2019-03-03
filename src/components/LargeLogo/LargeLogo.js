import React from 'react';
import './LargeLogo.css';
import { Link } from 'react-router-dom';
import homepagelogo from '../../assets/images/homepage.gif';

const LargeLogo = () => (
    <div className="logo">
        <Link to="/posterpage" style={{ textDecoration: 'none' , color: 'black'}}>
            <img src={homepagelogo} alt='shop-the-story' style={{ width: '80%'}}/>
        </Link>
    </div>
);

export default LargeLogo;