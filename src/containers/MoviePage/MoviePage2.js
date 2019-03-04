import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import movietitle2 from '../../assets/images/movietitle2.png';
import FooterLogo from '../../components/Footer/FooterLogo';

const MoviePage2 = () => (
    <div className="moviePageContainer">
        <Link to="productspage2"><img src={movietitle2} className="movieTitle" alt='flower-arrangement-class'/></Link>
        <div className="iframecontainer">
        <iframe src="https://player.vimeo.com/video/321103346" width="1090" height="613" top="0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <FooterLogo/>
    </div>
);
export default MoviePage2;