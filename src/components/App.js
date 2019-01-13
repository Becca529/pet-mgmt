import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Footer from './common/Footer';
import Header from './common/Header';
import LandingPage from './landing/LandingPage';
import RegistrationPage from './register/RegistrationPage';
// import LoginPage from './login/LoginPage';
 import LoginForm from './login/LoginForm';

import HomePage from './home/HomePage';
import VetForm from './vet/ VetForm';
import VaccineForm from './vaccine/VaccineForm';
import FoodForm from './pet-sitting/FoodForm';
import PetProfilePage from './home/PetProfilePage';

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
                <Route path="/pet-profile/:petId" component={PetProfilePage} />
                <Route path="/veterinarians/:petId" component={VetForm} />
                <Route path="/vaccines/:petId" component={VaccineForm} />
                <Route path="/sitters/:petId" component={FoodForm} />
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
