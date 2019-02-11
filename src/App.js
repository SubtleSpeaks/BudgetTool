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
            <h3>Calculate your weekly budget in 3 easy steps!</h3>
            <br/>
            <p><strong>This tool is designed to let you play around with numbers to help you feel financially secure - because no one likes being stressed about money.</strong></p>
            <br/>
            <p><strong>GUIDE 🤓:
            <ul>
              <li>If you're already halfway through term, use current date as current term start date and leave the previous terms blank.</li>
              <li>If a field is not applicable to you just leave it blank.</li>
              <li>After inputing values find your budget below.</li>
            </ul>
            </strong></p>
            <p>Please leave any feedback at the bottom of the page 💖</p>
          </div>
          <Calculator />
          <div className="footer">
            <p>For students, made with love by Subtle Speaks.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
