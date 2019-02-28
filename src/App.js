import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LargeLogo from './components/LargeLogo/LargeLogo';
import Footer from './components/Footer/Footer';
import PosterPage from './containers/PosterPage/PosterPage';
import MoviePage from './containers/MoviePage/MoviePage';
import ProductsPage from './containers/ProductsPage/ProductsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
        <LargeLogo/>
        <PosterPage/>
        <MoviePage/>
        <ProductsPage/>
      </div>
    );
  }
}

export default App;
