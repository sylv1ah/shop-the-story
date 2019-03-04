import React from 'react';
import './ProductsPage.css';
import Header from '../../components/Header/Header';
// import prod1 from '../../assets/images/prod1.png';
// import prod2 from '../../assets/images/prod2.png';
// import prod3 from '../../assets/images/prod3.png';
// import prod4 from '../../assets/images/prod4.png';
// import prod5 from '../../assets/images/prod5.png';
import FooterLogo from '../../components/Footer/FooterLogo';
import productspage1 from '../../assets/images/flowerarrangmentwebsite.png';
import movietitle from '../../assets/images/movietitle.png';

const ProductsPage = () => (
    <div className="productsContainer">
        <Header/>
        <img src={movietitle} className="movieTitle" alt='flower-arrangement-class'/>
        <div className="products">
        <img src={productspage1} alt="productspage1"/>
            {/* <div className="group1">
            </div>
            <div className="group2">
                <img src={prod3} alt="prod1"></img>
                <img src={prod4} alt="prod2"></img>
                <img src={prod2} alt="prod2"></img>
            </div>
            <div className="group3">
                <img src={prod5} alt="prod1"></img>
                <img src={prod1} alt="prod2"></img>
            </div>
        </div>
        <div className="products2">
            <div className="group4">
            <img src={prod3} alt="prod1"></img>
            <img src={prod5} alt="prod1"></img>
            </div>*/}
        </div> 
        <FooterLogo/>
    </div>
);

export default ProductsPage;