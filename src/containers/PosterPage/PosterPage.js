import React from 'react';
import './PosterPage.css';
import MovingScript from '../../components/MovingScript/MovingScript';
import PosterScroll from '../../components/PosterScroll/PosterScroll';
//import SmallLogo from '../../components/SmallLogo/SmallLogo';
import FooterLogo from '../../components/Footer/FooterLogo';

const PosterPage = () => (
    <div className="page">
        <MovingScript/>
        <PosterScroll/>
        <FooterLogo/>
    </div>
);

export default PosterPage;