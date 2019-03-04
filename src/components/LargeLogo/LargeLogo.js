import React from 'react';
import './LargeLogo.css';
import { Link } from 'react-router-dom';
import homepagelogo from '../../assets/images/homepage.gif';
import gif1 from '../../assets/images/gif1.gif';
import gif2 from '../../assets/images/gif2.gif';

const LargeLogo = () => (
    <div className="logo">
    <img src={gif1} alt="gif1" className="gif gif1" style={{ width: '10%'}}/>
        <Link to="/posterpage" style={{ textDecoration: 'none' , color: 'black'}}>
            <img src={homepagelogo} alt='shop-the-story' style={{ width: '50%'}}/>
        </Link>
    <img src={gif2} alt="gif2" className="gif gif2" style={{ width: '10%'}}/>
    </div>
);

export default LargeLogo;