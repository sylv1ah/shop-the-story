import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import movieIMG from '../../assets/images/movieSC.png';
import FooterLogo from '../../components/Footer/FooterLogo';
//import SmallLogo from '../../components/SmallLogo/SmallLogo';
import movietitle from '../../assets/images/movietitle.png';

const MoviePage = () => (
    <div className="moviePageContainer">
        <img src={movietitle} className="movieTitle" alt='flower-arrangement-class'/>
        <Link to="productspage"><div className="movie"><img src={movieIMG} alt="movieIMG"></img></div></Link>
        
        <FooterLogo/>
    </div>
);
export default MoviePage;
