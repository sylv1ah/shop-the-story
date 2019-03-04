import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import PosterPage from './containers/PosterPage/PosterPage';
import MoviePage from './containers/MoviePage/MoviePage';
import MoviePage2 from './containers/MoviePage/MoviePage2';
import MoviePage3 from './containers/MoviePage/MoviePage3';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import ProductsPage2 from './containers/ProductsPage/ProductsPage2';
import ProductsPage3 from './containers/ProductsPage/ProductsPage3';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/posterpage" component={PosterPage}/>
          <Route path="/moviepage" component={MoviePage}/>
          <Route path="/moviepage2" component={MoviePage2}/>
          <Route path="/moviepage3" component={MoviePage3}/>
          <Route path="/productspage" component={ProductsPage}/>
          <Route path="/productspage2" component={ProductsPage2}/>
          <Route path="/productspage3" component={ProductsPage3}/>
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
