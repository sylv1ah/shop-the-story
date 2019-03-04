import React from 'react';
import { Link } from 'react-router-dom';
import './PosterScroll.css';

const PosterScroll = () => (
    <div className="container">
        <Link to="moviepage"><div className="poster1"></div></Link>
        <Link to="moviepage2"><div className="poster2"></div></Link>
        <Link to="moviepage3"><div className="poster3"></div></Link>
        
        
    </div>
);

export default PosterScroll;