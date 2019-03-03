import React from 'react';
import './SmallLogo.css';
import { Link } from 'react-router-dom';
import bottomlogo from '../../assets/images/bottomlogo.gif';

const SmallLogo = () => (
    <div className='smallLogo'>
        <Link to="/" style={{ textDecoration: 'none' , color: 'black'}}><img src={bottomlogo} alt='shop-the-story' style={{width: '20%'}}/></Link>
    </div>
);

export default SmallLogo;