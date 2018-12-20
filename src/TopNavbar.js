import React, { Component } from 'react';
import './App.css';
import './TopNavbar.css';

class TopNavbar extends Component {
  render() {
    return (
      <nav role="navigation">
      <div class="topnav">
      {/* <img class="logo" src="god" alt="home-logo"> */}
        <a class="active" href="#home">Home</a>
        <a href="#news">My Pet Community</a>
        <a href="#acount">My Account</a>
      <a href="#logout">Log Out</a>
    </div>
      </nav>
    );
  }
}

export default TopNavbar;
