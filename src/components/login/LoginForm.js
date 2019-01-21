import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../common/Input";
import { login } from "../../actions/auth";
import { required, nonEmpty } from "../../validators";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./LoginForm.css";

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
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

    if (this.props.loggedIn) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="login-container">
        <form
          className="login-form flex"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <fieldset>
          <label htmlFor="username">Username</label>
            <Field
              component={Input}
              type="text"
              name="username"
              id="username"
              validate={[required, nonEmpty]}
              label="Username"
            />
            <label htmlFor="password">Password</label>
            <Field
              component={Input}
              type="password"
              name="password"
              id="password"
              validate={[required, nonEmpty]}
              label="Password"
            />

            <div className="row">
              <button
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Log in
              </button>
              <button>
                <Link className="link-btn" to="/">
                  Cancel
                </Link>
              </button>
            </div>
          </fieldset>
          <Link to="/register">New User? Sign up here</Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser
  };
};

LoginForm = connect(mapStateToProps)(LoginForm);

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
