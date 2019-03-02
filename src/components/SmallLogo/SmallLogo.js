import React from 'react';
import './SmallLogo.css';
import { Link } from 'react-router-dom';

const SmallLogo = () => (
    <div>
        <Link to="/" style={{ textDecoration: 'none' , color: 'black'}}><div className="smallLogo">&#40;SHOP THE&#41;STORY</div></Link>
    </div>
);

export default SmallLogo;