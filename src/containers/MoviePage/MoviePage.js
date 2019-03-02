import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import movieIMG from '../../assets/images/movieSC.png';
import Footer from '../../components/Footer/Footer';
import SmallLogo from '../../components/SmallLogo/SmallLogo';

const MoviePage = () => (
    <div className="moviePageContainer">
        <h1 className="movieTitle">MOVIE TITLE</h1>
        <Link to="productspage"><div className="movie"><img src={movieIMG} alt="movieIMG"></img></div></Link>
        <SmallLogo/>
        <Footer/>
    </div>
);
export default MoviePage;
