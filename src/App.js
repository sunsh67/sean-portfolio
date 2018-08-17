import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Intro from './Intro/intro';

class App extends Component {
  render() {
    return(
     <div className="App">
     <Header/>
     <Intro/>
     </div>
    );
  }
}

export default App;
