import React from 'react';
import './LandingPage.css';
import LoginForm from '../login/LoginForm';
import FeatureBox from './FeatureBox';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/home" />;
}
  return (
    <div className="landing">
      <div className="welcome-container">
        <h1>[Pet Management Name]</h1>
        <h2>Manage everything pet in one place</h2>
        <LoginForm />
      </div>
      <div className="feature-area">
        <FeatureBox icon="far fa-user-circle fa-5x" title="Build Pet Profiles" description='Build profiles for each one of your fur babies in your family' />
        <FeatureBox icon="fas fa-notes-medical fa-5x" title="Store and Track Pet Health Records" description="Never forget when your pet next round of vaccines are due." />
        <FeatureBox icon="fas fa-suitcase-rolling fa-5x" title="House Pet Sitting Details" description="Tired of always writing out pet sitting instructions every time you go out of town? Keep your instructions in one spot online that can be easily shared with others." />
        <FeatureBox icon="fas fa-user-friends fa-5x" title="Interact with your Local Pet Community" description="Looking to get involved with great local animal volunteer opportunities or attend upcoming pet events in your neighbor? We got your coverd plus much much more."/>
   </div>
        {/* <div className="feature-box">
          <img className="feature-icon" alt="feature icon"/>
          <div className="feature-body">
            <h5 className="feature-title">Store Key Vet Information</h5>
            <p className="feature-details">Never forget when your pet's next vaccination is due with an easy interface to track and remind you of upcoming due dates.</p>
          </div>
        </div>
        <div className="feature-box">
          <img className="feature-icon" alt="feature icon"/>
          <div className="feature-body">
            <h5 className="feature-title">House Pet Sitting Details</h5>
            <p className="feature-details">Tired of always writing out pet sitting instructions every time you go out of town? Keep your instructions in one spot online that can be easily shared with others.</p>
          </div>
        </div>
        <div className="feature-box">
          <img className="feature-icon" alt="feature icon"/>
          <div className="feature-body">
            <h5 className="feature-title">Interact with your Local Pet Community</h5>
            <p className="feature-details">Looking to get involved with great local animal volunteer opportunities or attend upcoming pet events in your neighbor? We got your coverd plus much much more.</p>
          </div>
        </div> */}
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);





