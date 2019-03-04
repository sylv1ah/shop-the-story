import React from 'react';
import './ProductsPage.css';
import Header from '../../components/Header/Header';
import FooterLogo from '../../components/Footer/FooterLogo';
import productspage3 from '../../assets/images/thirdstoryproducts.png';
import movietitle3 from '../../assets/images/movietitle3.png';

const ProductsPage3 = () => (
    <div className="productsContainer">
        <Header/>
        <img src={movietitle3} className="movieTitle" alt='third-story'/>
        <div className="products">
        <img src={productspage3} alt="productspage2"/>
         
        </div> 
        <FooterLogo/>
    </div>
);

export default ProductsPage3;