import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LargeLogo from './components/LargeLogo/LargeLogo';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
        <LargeLogo/>
        <LargeLogo/>
        
      </div>
    );
  }
}

export default App;
