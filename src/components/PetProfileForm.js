import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './Input';
import {required, nonEmpty } from '../validators';

export class PetProfileForm extends React.Component {
    onSubmit(values) {
        const {petName, breed, sex, birthdate, personality, likes, dislikes, physicalDescription, weight} = values;
        const pet = {petName, breed, sex, birthdate, personality, likes, dislikes, physicalDescription, weight};
        // console.log(values);
        console.log("submit button pushed");
        return fetch('/api/pets', {
            method: 'POST',
            body: JSON.stringify(pet),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Pet Profile submitted successfully
                </div>
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
                {successMessage}
                {errorMessage}
                 {/* PHOTO */}
                 <fieldset>
                    <legend>Create a New Pet Profile - {this.props.username}</legend>
                <Field
                    name="petName"
                    type="text"
                    component={Input}
                    label="Pet Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="type"
                    type="text"
                    component={Input}
                    label="Type"
                />
                  <Field
                    name="breed"
                    type="text"
                    component={Input}
                    label="Breed"
                />
                 <Field
                    name="sex"
                    type="text"
                    component={Input}
                    label="Sex"
                />
                 <Field
                    name="birthdate"
                    type="date"
                    component={Input}
                    label="Birthdate"
                />
                  <Field
                    name="personality"
                    type="text"
                    component={Input}
                    label="Personality"
                />
                  <Field
                    name="likes"
                    type="text"
                    component={Input}
                    label="Likes"
                />
                   <Field
                    name="dislikes"
                    type="text"
                    component={Input}
                    label="Dislikes"
                />
                 <Field
                    name="physicalDescription"
                    type="text"
                    element="textarea"
                    component={Input}
                    label="Physical Description"
                />
                 <Field
                    name="weight"
                    type="number"
                    component={Input}
                    label="Weight"
                />
                <button
                    type="submit">
                    {/* disabled={this.props.pristine || this.props.submitting}> */}
                    Create Profile
                </button>
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({
    form: 'pet-profile',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('pet-profile', Object.keys(errors)[0]))
})(PetProfileForm);