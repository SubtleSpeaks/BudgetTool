import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      something: true
    }
  }

  render() {
    return(
      <div className="App-header">
        <div className="App-header-left">
          <img src={logo} className="App-logo" alt="logo" width="120"/>
        </div>
        <div className="App-header-center">
          <h1>Student Budget Tool</h1>
        </div>
        <div className="App-header-right">
        </div>
      </div>
    )
  }

}

export default Header
