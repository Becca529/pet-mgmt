import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {Redirect, Link} from 'react-router-dom';
import {addPetSubdocument} from '../../actions/createPetProfile';
import {connect} from 'react-redux';




export class VetForm extends React.Component {
    onSubmit(values) {
        let type = "vet"
        const {clinicName, addressLine1, addressLine2, city, zipCode, state, phoneNumber, faxNumber, email, doctor} = values;
        const vetInfo = {clinicName, addressLine1, addressLine2, city, zipCode, state, phoneNumber, faxNumber, email, doctor};
        const petid = this.props.match.params.petId;
        console.log(type);
        return this.props
            .dispatch(addPetSubdocument(vetInfo, petid, type))
    }

    render() {
        if (this.props.redirect) {
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
const mapStateToProps = (state, props) => {
    const petId = props.match.params.petId;
    console.log(state);
     return {
        redirect: state.petprofile.redirect,
        currentPet: state.petprofile.currentPet,
        loading: state.petprofile.loading,
        error: state.petprofile.error,
    };
};

VetForm = connect(
    mapStateToProps
)(VetForm);

export default reduxForm({
    form: 'vet',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('vet', Object.keys(errors)[0]))
})(VetForm);