import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../../actions/users';
import {login} from '../../actions/auth';
import Input from '../common/Input';
import {Link} from 'react-router-dom';
import './RegistrationPage.css';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');




export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName, email} = values;
        const user = {username, password, firstName, email, lastName};
        console.log('got to onsubmit');
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form id="registration-form" 
            className="registration-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
             <fieldset>
            <legend>Create an Account</legend>
            
                <Field component={Input} type="text" name="firstName" label="First name"/>
   
                <Field component={Input} type="text" name="lastName" label="Last name"/>
    
                <Field label="Email" component={Input} type="email" name="email" validate={required}/>
            
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                    label="Username"
                />
          
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                    label="Password"
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                    label="Confirm password"
                />
            <div class="row">
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register & Sign In
                </button>
            
                <button><Link className="link-btn" to="/">Cancel</Link></button>
                </div>
                <div class="row">
                <Link to="/login">Already signed up? Log In</Link>
                </div>
                </fieldset>
            </form>
        );
    }
}
export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);