import React, { Component } from 'react';
import logo from '../logo.png';

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
        <img src={logo} className="App-logo" alt="logo" width="150"/>
        <h1>Student Budget Calculator 💸 🧮</h1>
      </div>
    )
  }

}

export default Header
