import React from 'react';
import './PosterPage.css';
import MovingScript from '../../components/MovingScript/MovingScript';
import PosterScroll from '../../components/PosterScroll/PosterScroll';
import SmallLogo from '../../components/SmallLogo/SmallLogo';
import Footer from '../../components/Footer/Footer';

const PosterPage = () => (
    <div className="page">
        <MovingScript/>
        <PosterScroll/>
        <SmallLogo/>
        <Footer/>
    </div>
);

export default PosterPage;