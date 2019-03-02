import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import PosterPage from './containers/PosterPage/PosterPage';
import MoviePage from './containers/MoviePage/MoviePage';
import ProductsPage from './containers/ProductsPage/ProductsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/posterpage" component={PosterPage}/>
          <Route path="/moviepage" component={MoviePage}/>
          <Route path="/productspage" component={ProductsPage}/>
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
