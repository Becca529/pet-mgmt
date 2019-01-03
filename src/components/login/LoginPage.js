import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
// import './App.css';
import LoginForm from './LoginForm';


export function LoginPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="sign-in">
            <LoginForm />
            <Link to="/register">New User? Sign up here</Link>
        </div>
    );
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);



