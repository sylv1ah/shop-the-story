import React from 'react';
import './ProductsPage.css';
import Header from '../../components/Header/Header';
import FooterLogo from '../../components/Footer/FooterLogo';
import productspage2 from '../../assets/images/hikewithme.png';
import movietitle2 from '../../assets/images/movietitle2.png';

const ProductsPage2 = () => (
    <div className="productsContainer">
        <Header/>
        <img src={movietitle2} className="movieTitle" alt='hike-with-me'/>
        <div className="products">
        <img src={productspage2} alt="productspage2"/>
         
        </div> 
        <FooterLogo/>
    </div>
);

export default ProductsPage2;