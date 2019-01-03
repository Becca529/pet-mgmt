import React from 'react';
import {Route, IndexRoute} from 'react-router';

import LandingPage from './landing/LandingPage';
import RegistrationPage from './register/RegistrationPage';
import LoginPage from './login/LoginForm';
import HomePage from './home/HomePage';
import App from './App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="login" component={LoginPage} />
        <Route path="register" component={RegistrationPage} />
        <Route path="home" component={HomePage} />
    </Route>
)