import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {Redirect, Link} from 'react-router-dom';
import {addVeterinarian, updateVeterinarian, deleteVeterinarian} from '../../actions/veterinarians';
import {deletePetSubdocument, setCurrentPet} from '../../actions/petProfiles';

import {connect} from 'react-redux';




export class VetForm extends React.Component {
    
    onSubmit(values) {
        const {clinicName, addressLine1, addressLine2, city, zipCode, state, phoneNumber, faxNumber, email, doctor} = values;
        const vet = {clinicName, addressLine1, addressLine2, city, zipCode, state, phoneNumber, faxNumber, email, doctor};
        console.log("getting to onSubmit on form");
        const petId = this.props.match.params.petId;
        const vetId = this.props.currentPetDetail._id;
        
        console.log(vetId);
        console.log("submit button pushed");
        // if (vetId){
        //     this.props.dispatch(updateVeterinarian(vet, petId, vetId));
        // }  
        // else {
            this.props.dispatch(addVeterinarian(vet, petId));

        // }
    }
        


    onClickDelete = () => {
        // console.log(subDocID);
        let petId = this.props.match.params.petId;
        let subDocId =this.props.match.params.subDoctId;
        console.log(subDocId);
        console.log(petId);
        let route = "veterinarian";

        console.log("getting back to on clicked delete");
        //message asking if they are sure they want to delete?
        // this.props.dispatch(deletePetSubdocument( petId, subDocID, route));
        }
 
    render() {
        let petId = this.props.match.params.petId;
        let currentVet = this.props.currentVet;

        if (this.props.redirect) {
            return (
                <Redirect to={`/pet-profile/${petId}`}/>
            )
        }




        let buttonType 
        if (this.props.formStatusEditing) {
            buttonType = (<div className="editForm">
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>Update</button>
                <button className="btn" onClick={this.onClickDelete}>Delete</button>
                </div>)
        }
        if (!this.props.formStatusEditing) {
            buttonType = (<button type="submit"disabled={this.props.pristine || this.props.submitting}>Submit</button>)
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
                {/* <p>name- {this.props.currentPet.petName}</p> */}
                {errorMessage}
                <p>form status- {this.props.formStatusEditing}</p>
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
                    type="text"
                    component={Input}
                    label="Emergency / After Hours Availability?"
                /> 
                {buttonType}
                <button><Link to={`/pet-profile/${petId}`}>Cancel</Link></button>
                </fieldset>
            </form>
        );
    }
}

const getInitialValues = (currentPetDetail) => {
    if (currentPetDetail) {
        const { clinicName, emergencyAfterHours, email, addressLine1, addressLine2, city, zipcode, state, phoneNumber, faxNumber, doctor } = currentPetDetail;
        return { clinicName, emergencyAfterHours, email, addressLine1, addressLine2, city, zipcode, state, phoneNumber, faxNumber, doctor };
    }
}

VetForm = reduxForm({
    form: 'vet-form', // a unique identifier for this form
    onSubmitFail: (errors, dispatch) => dispatch(focus('vet-form', 'clinicName')),
    // enableReinitialize: true
  })(VetForm)

  VetForm = connect(
    (state) => {
        // const petId = props.match.params.petId;
        // console.log(this.props.currentPet.)
        console.log(state);
         return {
            redirect: state.petprofile.redirect,
            initialValues: getInitialValues(state.petprofile.currentPetDetail),
            currentPet: state.petprofile.currentPet,
            loading: state.petprofile.loading,
            error: state.petprofile.error,
            currentPetDetail: state.petprofile.currentPetDetail,
            formStatusEditing: state.petprofile.formStatusEditing
        }
    }
)(VetForm);


export default VetForm