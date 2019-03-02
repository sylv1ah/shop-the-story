import React from 'react';
import { Link } from 'react-router-dom';
import './PosterScroll.css';

const PosterScroll = () => (
    <div className="container">
        <Link to="moviepage"><div className="poster"></div></Link>
        <Link to="moviepage"><div className="poster"></div></Link>
        <Link to="moviepage"><div className="poster"></div></Link>
        <Link to="moviepage"><div className="poster"></div></Link>
        <Link to="moviepage"><div className="poster"></div></Link>
    </div>
);

export default PosterScroll;