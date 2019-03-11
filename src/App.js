import React, { Component } from 'react';
import Header from './Header.js';
import Calculator from './Calculator.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { showGuide: true }
  }

  toggleGuide = () => {
    this.setState({ showGuide: !this.state.showGuide })
  }

  render() {

    var toggleGuideText
    var introductionText

    if (this.state.showGuide) {
      toggleGuideText = <div className="toggleGuideText"><p>Hide guide</p></div>
      introductionText =
        <div className="IntroductionText">
          <h3>Calculate your weekly budget in 3 easy steps!</h3>
          <br/>
          <p><strong>This tool is designed to let you play around with numbers to help you feel financially secure - because no one likes being stressed about money.</strong></p>
          <br/>
          <p><strong>GUIDE 🤓:</strong></p>
          <ul>
            <li><p>If you're already halfway through term, use today's date as current term start date and leave the previous terms blank.</p></li>
            <li><p>If a field is not applicable to you just leave it blank.</p></li>
            <li><p>After inputing values find your budget below.</p></li>
          </ul>
          <p>Please leave any feedback at the bottom of the page 💖</p>
        </div>
    } else {
      toggleGuideText = <div className="toggleGuideText"><p>Show guide</p></div>
      introductionText = ""
    }

    return (
      <div className="App">

        <Header />
        <div className="App-body">

          <div className="toggleGuideText">
            <button className="toggleGuideButton" onClick={this.toggleGuide}>{toggleGuideText}</button>
          </div>

          {introductionText}

          <div className="Calculator">
            <Calculator />
          </div>

          <div className="Feedback">
            <h2>Feedback</h2>
            <p>How has this tool worked for you? If you have any feedback or requests please drop an email.</p>
            <br />
            <a href="mailto:seb@subtlespeaks.co.uk"><h4>Send feedback email</h4></a>
          </div>

          <div className="Footer">
            <p>For students. Made with love by Subtle Speaks 💖</p>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
