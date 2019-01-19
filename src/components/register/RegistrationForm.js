import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../actions/users";
import { login } from "../../actions/auth";
import Input from "../common/Input";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import "./RegistrationPage.css";
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from "../../validators";
const passwordLength = length({ min: 6, max: 72 });
const matchesPassword = matches("password");

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName, email } = values;
    const user = { username, password, firstName, email, lastName };
    console.log("got to onsubmit");
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    let error;
    if (this.props.error) {
        error = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
        );
    }


    return (
      <form
        id="registration-form"
        className="registration-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <fieldset>
          <legend>Create an Account</legend>
          <Field
            component={Input}
            type="text"
            name="firstName"
            label="First name"
          />

          <Field
            component={Input}
            type="text"
            name="lastName"
            label="Last name"
          />

          <Field
            label="Email"
            component={Input}
            type="email"
            name="email"
            validate={required}
          />

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
          <div className="row">
            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Register & Sign In
            </button>

            <button>
              <Link className="link-btn" to="/">
                Cancel
              </Link>
            </button>
          </div>
          <div className="row">
            <Link to="/login">Already signed up? Log In</Link>
          </div>
        </fieldset>
      </form>
    );
  }
}


RegistrationForm = reduxForm({
  form: 'registration', 
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', 'firstName')),
})(RegistrationForm)


RegistrationForm = connect(state => {
  return {
    registerError: state.petprofile.registerError
  };
})(RegistrationForm);
     
export default RegistrationForm
 