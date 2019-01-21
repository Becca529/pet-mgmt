import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './RegistrationPage.css';
import RegistrationForm from './RegistrationForm';


export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="registeration-container">
            <RegistrationForm />
        </div>
    );
}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);



