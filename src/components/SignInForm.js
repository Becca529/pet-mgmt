import React, { Component } from 'react';
import './App.css';
import './SignInForm.css';

class SignInForm extends Component {
  render() {
    return (
      <form id="form-log-in">
      <fieldset>
          <legend>Please Sign In</legend>
          <div class="row">
              <div class="col-4">
                  <label for="username-txt">Username:</label>
              </div>
              <div class="col-6">
                  <input id="username-txt" type="text" required/>
              </div>
          </div>
          <div class="row">
              <div class="col-4">
                  <label for="password-txt">Password:</label>
              </div>
              <div class="col-6">
                  <input id="password-txt" type="password" required/>
              </div>
          </div>
          <div class="row">
              <button class="primary-button" type="submit" value="Sign In">Sign In</button><button class="primary-button cancel-btn"
                  value="cancel">Cancel</button>
          </div>
      </fieldset>
  </form>
  );
  }
}

export default SignInForm;
