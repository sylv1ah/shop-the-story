import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import movietitle3 from '../../assets/images/movietitle3.png';
import FooterLogo from '../../components/Footer/FooterLogo';

const MoviePage3 = () => (
    <div className="moviePageContainer">
        <Link to="productspage3"><img src={movietitle3} className="movieTitle" alt='third-story'/>
        <div className="iframecontainer3">
        <iframe src="https://player.vimeo.com/video/321106351" width="850" height="622" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div></Link>
        <FooterLogo/>
    </div>
);
export default MoviePage3;