import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {Redirect, Link} from 'react-router-dom';


export class MedicalForm extends React.Component {
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
                    <legend>Add New Medicine</legend>
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="Medicine Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="description"
                    type="text"
                    component={Input}
                    label="Description"
                />
                  <Field
                    name="directions"
                    type="text"
                    component={Input}
                    label="Directions"
                    validate={[required, nonEmpty]}
                />
                 <Field
                    name="rxNumber"
                    type="text"
                    component={Input}
                    label=" RX Number"
                />
                 <Field
                    name="prescribingVet"
                    type="date"
                    component={Input}
                    label="Prescribing Vet"
                />
                  <Field
                    name="notes"
                    type="text"
                    component={Input}
                    label="Additional Notes"
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
    form: 'medical',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('medical', Object.keys(errors)[0]))
})(MedicalForm);