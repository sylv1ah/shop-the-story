import React from 'react';
import './MoviePage.css';
import movieIMG from '../../assets/images/movieSC.png';

const MoviePage = () => (
    <div className="moviePageContainer">
        <h1 className="movieTitle">MOVIE TITLE</h1>
        <div className="movie"><img src={movieIMG} alt="movieIMG"></img></div>
    </div>
);
export default MoviePage;
