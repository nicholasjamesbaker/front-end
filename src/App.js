import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Education />
        <Experience/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
}

export default App;
