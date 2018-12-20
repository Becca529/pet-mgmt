import React, { Component } from 'react';
import './App.css';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <section>
      <header role="banner">
      <h1>[Pet Management Name]</h1>
      <h2>manage everything pet in one place</h2>
      <button >Sign Up!</button>
      <button >Log In!</button>
    </header>
    <section>
      <header>
          <h3>Build Pet Profiles</h3>
      </header>
      <p>[<em>placeholder for photo]</em>]</p>
      <p>Build profiles for each one of your fur babies in your family</p>
    </section>
    <section>
      <header>
          <h3>Store Key Vet Information</h3>
      </header>
      <p>[<em>placeholder for screenshot]</em>]</p>
      <p>Never forget when your pet's next vaccination is due with an easy interface to track and remind you of upcoming due dates.</p>
    </section>
     <section>
      <header>
          <h3>House Pet Sitting Details</h3>
      </header>
      <p>[<em>placeholder for screenshot]</em>]</p>
      <p>Tired of always writing out pet sitting instructions every time you go out of town? Keep your instructions in one spot online that can be easily shared with others.  </p>
    </section>
     <section>
      <header>
          <h3>Interact with your Local Pet Community</h3>
      </header>
      <p>[<em>placeholder for screenshot]</em>]</p>
      <p>Looking to get involved with great local animal volunteer opportunities or attend upcoming pet events in your  neighbor? We got your coverd plus much much more. </p>
    </section>
    </section>
    );
  }
}

export default Homepage;
