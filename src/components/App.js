import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Switch} from 'react-router-dom';

import Footer from './common/Footer';
import Header from './common/Header';
import LandingPage from './landing/LandingPage';
import RegistrationPage from './register/RegistrationPage';
// import LoginPage from './login/LoginPage';
 import LoginForm from './login/LoginForm';

import HomePage from './home/HomePage';
import VetPage from './vet/VetPage';
import MedicalPage from './medical/MedicalPage';
import PetSittingPage from './pet-sitting/PetSittingPage';

import PetProfileForm from './home/PetProfileForm';

import {refreshAuthToken} from '../actions/auth';
import './App.css';


export class App extends React.Component {
  componentDidUpdate(prevProps) {
      if (!prevProps.loggedIn && this.props.loggedIn) {
          // When we are logged in, refresh the auth token periodically
          this.startPeriodicRefresh();
      } else if (prevProps.loggedIn && !this.props.loggedIn) {
          // Stop refreshing when we log out
          this.stopPeriodicRefresh();
      }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

  render() {
      return (
          <div className="app-container">
              <Header />
              <div className="main">
                <Route exact path="/" component={LandingPage} />
                <Route path="/home" component={HomePage} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/pet-profile" component={PetProfileForm} />
                <Route exact path="/vet" component={VetPage} />
                <Route exact path="/medical" component={MedicalPage} />
                <Route exact path="/pet-sitting" component={PetSittingPage} />
                </div>
              <Footer />
          </div>
      );
  }
}


const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});


// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));

//                <Route exact path="/pets" component={PetProfileForm} /> 
