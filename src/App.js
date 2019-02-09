import React, { Component } from 'react';
import Header from './Header.js';
import Calculator from './Calculator.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <div className="IntroductionText">
            <h4>This tool is designed to let you play around with your numbers to
            make sure you feel financially secure - because no one likes being
            stressed about money.</h4>
            <br/>
            <h4>If you're already halfway through term, input the start date of the
            term you're currently in as today and leave the previous terms blank.
            </h4>
          </div>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
