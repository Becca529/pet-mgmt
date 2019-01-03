import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {Redirect, Link} from 'react-router-dom';


export class VetForm extends React.Component {
    onSubmit(values) {
    }
    render() {
        if (this.props.submitSucceeded) {
            return (
                <Redirect to="/home"/>
            );
            
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {errorMessage}
                 <fieldset>
                    <legend>Vet Information</legend>
                <Field
                    name="clinicName"
                    type="text"
                    component={Input}
                    label="Clinic Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="addressLine1"
                    type="text"
                    component={Input}
                    label="Address Line 1"
                />
                  <Field
                    name="addressLine2"
                    type="text"
                    component={Input}
                    label="Address Line 2"
                />
                 <Field
                    name="city"
                    type="text"
                    component={Input}
                    label="City"
                />
                 <Field
                    name="zipCode"
                    type="date"
                    component={Input}
                    label="Zip Code"
                />
                  <Field
                    name="phoneNumber"
                    type="text"
                    component={Input}
                    label="Phone Number"
                />
                  <Field
                    name="faxNumber"
                    type="text"
                    component={Input}
                    label="Fax Number"
                />
                  <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email"
                /> 
                <Field
                    name="emergencyAfterHours"
                    type="boolean"
                    component={Input}
                    label="Emergency / After Hours Availability?"
                />    
                <button 
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <button><Link to="/home">Cancel</Link></button>
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'vet',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('vet', Object.keys(errors)[0]))
})(VetForm);