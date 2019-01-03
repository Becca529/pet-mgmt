import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {Redirect, Link} from 'react-router-dom';


export class VaccineForm extends React.Component {
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
                    <legend>Vaccine Information</legend>
                <Field
                    name="vaccineName"
                    type="text"
                    component={Input}
                    label="Vaccine Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="dateAdministered"
                    type="date"
                    component={Input}
                    label="Date Administered"
                />
                  <Field
                    name="nextDueDate"
                    type="date"
                    component={Input}
                    label="Next Due Date"
                />
                 <Field
                    name="notes"
                    type="text"
                    component={Input}
                    label="Additional Notes"
                />
                 <Field
                    name="status"
                    type="text"
                    component={Input}
                    label="Status"
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
    form: 'vaccine',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('vaccine', Object.keys(errors)[0]))
})(VaccineForm);