import React, { Component } from 'react';
import './App.css';
import './SignUpForm.css';

class SignUpForm extends Component {
  render() {
    return (
      <div className="sign-up">
      <form id="form-sign-up" method="post">
       <fieldset>
           <legend>Create an Account</legend>
           <div className="row form-error-messages">
            </div>
           <div class="row">
           <div class="col-4">
               <label for="first-name-txt">First Name:<span class="required">*</span></label>
           </div>
           <div class="col-6">
               <input id="first-name-txt" type="text" required />
           </div>
       </div>
       <div class="row">
           <div class="col-4">
               <label for="last-name-txt">Last Name:<span class="required">*</span></label>
           </div>
           <div class="col-6">
               <input id="last-name-txt" type="text" required/>
           </div>
       </div>
       <div class="row">
           <div class="col-4">
               <label for="email-txt">Email:<span class="required">*</span></label>
           </div>
           <div class="col-6">
               <input id="email-txt" type="email" required/>
           </div>
       </div>
       <div class="row">
           <div class="col-4">
               <label for="username-txt">Username:<span class="required">*</span></label>
           </div>
           <div class="col-6">
               <input id="username-txt" pattern=".{4,}" title="Please enter 4 or more characters" maxlength="30" type="text" required/>
           </div>
       </div>
       <div class="row">
           <div class="col-4">
               <label for="password-txt">Password:<span class="required">*</span></label>
           </div>
           <div class="col-6">
               <input id="password-txt" pattern=".{6,}" title="Please enter six or more characters" maxlength="30" type="password" required placeholder="Min 6 characters"/>
           </div>
       </div>
       <div class="row">
           <button type="submit" class="primary-button form-sign-up-button" value="submit">Submit</button><button type="cancel"
               class="primary-button cancel-btn" value="cancel">Cancel</button>
       </div>
       <div class="row">
           <p class="form-messages">*Required Field</p>
       </div>
       </fieldset>
   </form>
   </div>
  
    );
  }
}

export default SignUpForm;
