import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
// import {required, nonEmpty } from '../../validators';
import {Redirect, Link} from 'react-router-dom';


export class FoodForm extends React.Component {
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
                    <legend>Food Details</legend>
                <Field
                    name="foodType"
                    type="text"
                    component={Input}
                    label="Food Type"
                />
                <Field
                    name="foodQuantity"
                    type="text"
                    component={Input}
                    label="Quantity of Food"
                />
                  <Field
                    name="foodFrequency"
                    type="text"
                    component={Input}
                    label="Food Frequency"
                />
                  <Field
                    name="note"
                    type="text"
                    component={Input}
                    label="Notes"
                />
                </fieldset>
                <button 
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <button><Link to="/home">Cancel</Link></button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'food',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('food', Object.keys(errors)[0]))
})(FoodForm);