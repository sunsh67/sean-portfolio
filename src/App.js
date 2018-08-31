import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Intro from './Intro/intro';
import Project from './Projects/projects';
import Footer from './Footer/footer';

class App extends Component {
  render() {
    return(
     <div className="App">
     <Header/>
     <Intro/>
     <Project/>
     <Footer/>
     </div>
    );
  }
}

export default App;
