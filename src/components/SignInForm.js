import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {Redirect} from 'react-router-dom';



export class SignInForm extends React.Component {
// export function SignInForm(props) {

   
onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password))
        };



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

        else {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>                
                {error}
                <fieldset>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button 
                    type="submit" 
                    disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                </fieldset>
            </form>
        );
    }
}
    }


export default reduxForm({
    form: 'sign-in',
    onSubmitFail: (errors, dispatch) => dispatch(focus('sign-in', 'username'))
})(SignInForm);

      // if (this.props.loading === true){
        //     console.log("loading");

        // }

        // if (this.props.loggedIn) {
        //     return (
        //         <Redirect to="/home"/>
        //     )
        // }