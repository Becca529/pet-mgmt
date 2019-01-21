import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import Input from "../common/Input";
import { required, nonEmpty } from "../../validators";
import { Link } from "react-router-dom";
import {addVeterinarian, updateVeterinarian} from "../../actions/veterinarians";
import { deletePetSubdocument} from "../../actions/petProfiles";

import { connect } from "react-redux";

export class VetForm extends React.Component {
  onSubmit(values) {
    const { clinicName, addressLine1, addressLine2, city, zipCode, state, phoneNumber, faxNumber, email, doctor, emergencyAfterHours} = values;
    const vet = { clinicName, addressLine1, addressLine2, city, zipCode, state, phoneNumber, faxNumber, email, doctor, emergencyAfterHours};
    const petId = this.props.currentPet ? this.props.currentPet.id : null;
    const vetId = this.props.currentPetDetail ? this.props.currentPetDetail._id : null;

    //If there is a selected vet - dispatch update vet
    if (vetId) {
      this.props.dispatch(updateVeterinarian(vet, petId, vetId));
      this.props.history.push(`/pet-profile/${this.props.currentPet.id}`)
    }
    
    //If there is not selected vet - dispatch add vet
    if (!vetId) {
      this.props.dispatch(addVeterinarian(vet, petId));
       this.props.history.push(`/pet-profile/${this.props.currentPet.id}`)
    }
  }

    onClickDelete = () => {
      const petId = this.props.currentPet.id
      const vetId = this.props.currentPetDetail ? this.props.currentPetDetail._id : null;

      console.log(petId);
      let indexToDelete = this.props.currentPet.vetData.findIndex(
        x => x._id === vetId
      );
      console.log(indexToDelete);
      let route = "veterinarians";
      this.props.dispatch(deletePetSubdocument(petId, vetId, route, indexToDelete));
      this.props.history.push(`/pet-profile/${this.props.currentPet.id}`);
  };

  render() {

//Edit/add form buttons
    const vetId = this.props.currentPetDetail ? this.props.currentPetDetail._id : null;
    console.log(vetId);
    const petId = this.props.currentPet ? this.props.currentPet.id : null;
    let buttonType;
    if (vetId) {
      buttonType = (
        <div className="editForm">
          <button type="submit" disabled={this.props.pristine || this.props.submitting}>Update</button>
          <button className="btn" onClick={this.onClickDelete}>Delete</button>
        </div>
      );
    }
    if (!vetId) {
      buttonType = (
        <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
      );
    }

//Form Error message
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <div className="vet-container">
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
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
            <Field name="city" type="text" component={Input} label="City" />
            <Field
              name="zipCode"
              type="text"
              component={Input}
              label="Zip Code"
            />
            <Field
              name="phoneNumber"
              type="tel"
              component={Input}
              label="Phone Number"
            />
            <Field
              name="faxNumber"
              type="tel"
              component={Input}
              label="Fax Number"
            />
               <Field
              name="doctor"
              type="text"
              component={Input}
              label="Doctor"
            />
            <Field name="email" type="email" component={Input} label="Email" />
            <Field
              name="emergencyAfterHours"
              type="text"
              component={Input}
              label="Emergency / After Hours Availability?"
            />
            <div className="row">
              {buttonType}
              <button><Link to={`/pet-profile/${this.props.currentPet.id}`}>Cancel</Link></button>         
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

const getInitialValues = currentPetDetail => {
  if (currentPetDetail) {
    const {clinicName, emergencyAfterHours, email, addressLine1, addressLine2, city, zipcode, state,
      phoneNumber, faxNumber, doctor} = currentPetDetail;
    return {clinicName, emergencyAfterHours, email, addressLine1, addressLine2, city, zipcode, state, 
      phoneNumber, faxNumber, doctor};
    }
  return {clinicName: '', emergencyAfterHours: '', email: '', addressLine1: '', addressLine2: '', city: '', zipcode: '', state: '', 
    phoneNumber: '', faxNumber: '', doctor: ''};
  
};

VetForm = reduxForm({
  form: "vet-form", 
  onSubmitFail: (errors, dispatch) => dispatch(focus("vet-form", "clinicName")),
   enableReinitialize: true
})(VetForm);

VetForm = connect(state => {
  return {
    redirect: state.petprofile.redirect,
    initialValues: getInitialValues(state.petprofile.currentPetDetail),
    currentPet: state.petprofile.currentPet,
    loading: state.petprofile.loading,
    error: state.petprofile.error,
    currentPetDetail: state.petprofile.currentPetDetail,
    formStatusEditing: state.petprofile.formStatusEditing,
  };
})(VetForm);

export default VetForm;
