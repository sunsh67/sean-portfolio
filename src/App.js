import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Intro from './Intro/intro';
import Project from './Projects/projects';

class App extends Component {
  render() {
    return(
     <div className="App">
     <Header/>
     <Intro/>
     <Project/>
     </div>
    );
  }
}

export default App;
