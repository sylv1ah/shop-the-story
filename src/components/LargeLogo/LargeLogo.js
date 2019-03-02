import React from 'react';
import './LargeLogo.css';
import { Link } from 'react-router-dom';

const LargeLogo = () => (
    <div className="logo">
        <Link to="/posterpage" style={{ textDecoration: 'none' , color: 'black'}}>
            <div className="shopthe">&#40;SHOP THE&#41;</div>
            <div className="story">STORY</div>
        </Link>
    </div>
);

export default LargeLogo;