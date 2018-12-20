import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import Homepage from './Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <body>
       <TopNavbar />
       <main role="main">
          <Homepage/>
       </main>
        <Footer />
        </body>
      </div>
    );
  }
}

export default App;
