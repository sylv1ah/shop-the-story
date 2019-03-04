import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import FooterLogo from '../../components/Footer/FooterLogo';
import movietitle from '../../assets/images/movietitle.png';
import flower1 from '../../assets/images/flower1.png';
import flower2 from '../../assets/images/flower2.png';
import flower3 from '../../assets/images/flower3.png';
import flower4 from '../../assets/images/flower4.png';
import flower5 from '../../assets/images/flower5.png';

class MoviePage extends Component {
    
      render() {
    
        return (
            <div className="moviePageContainer">
                <img src={movietitle} className="movieTitle" alt='flower-arrangement-class'/>
                <Link to="productspage"><img src={flower1} className="flower" alt='flower1'/></Link>
                <Link to="productspage"><img src={flower2} className="flower" alt='flower2'/></Link>
                <Link to="productspage"><img src={flower3} className="flower" alt='flower3'/></Link>
                <Link to="productspage"><img src={flower4} className="flower" alt='flower4'/></Link>
                <Link to="productspage"><img src={flower5} className="flower" alt='flower5'/></Link>
                <FooterLogo/>
            </div>
        );
      }
    }
    



//     render() {
        
//         return (
            // <div className="moviePageContainer">
            // <img src={movietitle} className="movieTitle" alt='flower-arrangement-class'/>
//             <Carousel>
                // <Carousel.Item>
                //     <img src={flower1} alt="flower1"/>
                // </Carousel.Item>
                // <Carousel.Item>
                //     <img src={flower2} alt="flower2"/>
                // </Carousel.Item>
                // <Carousel.Item>
                //     <img src={flower3} alt="flower3"/>
                // </Carousel.Item>
                // <Carousel.Item>
                //     <img src={flower4} alt="flower4"/>
                // </Carousel.Item>
                // <Carousel.Item>
                //     <img src={flower5} alt="flower5"/>
                // </Carousel.Item>
//                 </Carousel>
        
        //     <FooterLogo/>
        // </div>
//         )
//     }
// }


export default MoviePage;
