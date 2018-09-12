import React, { Component } from 'react';
import './App.css';
import Header from './Header/header';
import Intro from './Intro/intro';
import Projects from './Projects/projects';
import Footer from './Footer/footer';
import About from './About/about';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'projects'
    }
    this.changeMode = this.changeMode.bind(this);
    this.remainMode = this.remainMode.bind(this);
  }

  changeMode = () => {
    this.setState({mode:'about'});
  }

  remainMode = () => {
    this.setState({mode:'projects'});
  }

  render() {
    return(
     <div className="App">
     <Header changeMode={this.changeMode} remainMode={this.remainMode}/>
     <Intro/>
     <About mode={this.state.mode}/>
     <Projects mode={this.state.mode}/>
     <Footer/>
     </div>
    );
  }}

export default App;
