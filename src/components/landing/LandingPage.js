import React from "react";
import "./LandingPage.css";
import FeatureBox from "./FeatureBox";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="landing">
      <div className="welcome-container">
        <div className="welcome-text">
          <h1>
            Pet L<i className="fas fa-paw"/>ve
          </h1>
          <h2>Manage everything pet in one place</h2>
          <button>
            <Link to="/login" className="link-btn">
              SIGN IN
            </Link>
          </button>
        </div>
        <Link to="/register">New User? Sign up here</Link>
      </div>
      <div className="feature-area">
        <FeatureBox
          icon="fas fa-user-circle fa-5x"
          title="Build Pet Profiles"
          description="Build profiles for all your fur babies in your family."
        />
        <FeatureBox
          icon="fas fa-notes-medical fa-5x"
          title="Store and Track Pet Health Records"
          description="Never forget when your pet's next round of vaccines are due."
        />
        <FeatureBox
          icon="fas fa-suitcase-rolling fa-5x"
          title="House Pet Sitting Details"
          description="Tired of always writing out pet sitting instructions every time you go out of town? Keep your instructions in one spot online that can be easily shared with others."
        />
        <FeatureBox
          icon="fas fa-user-friends fa-5x"
          title="Interact with your Local Pet Community"
          description="Looking to get involved with great local animal volunteer opportunities or attend upcoming pet events in your neighbor? We got your coverd plus much much more."
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
