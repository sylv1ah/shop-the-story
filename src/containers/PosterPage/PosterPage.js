import React from 'react';
import './PosterPage.css';
import MovingScript from '../../components/MovingScript/MovingScript';
import PosterScroll from '../../components/PosterScroll/PosterScroll';
import SmallLogo from '../../components/SmallLogo/SmallLogo';

const PosterPage = () => (
    <div className="page">
        <MovingScript/>
        <PosterScroll/>
        <SmallLogo/>
    </div>
);

export default PosterPage;