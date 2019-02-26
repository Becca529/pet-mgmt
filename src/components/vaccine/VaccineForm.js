import React from 'react';
import Input from "../common/Input";
import {connect} from 'react-redux';
import {required, nonEmpty } from '../../validators';
import {addVaccine, updateVaccine, deleteVaccine} from '../../actions/vaccines';

export class VaccineForm extends React.Component {
    
    handleSubmit(values){
        const {vaccineName, dateAdministered, nextDueDate, notes} = values;
        const vaccine = {vaccineName, dateAdministered, nextDueDate, notes};
        const petId = this.props.currentPet ? this.props.currentPet.id : null;
        const vaccineId = this.props.currentPetDetail ? this.props.currentPetDetail._id : null;

        //If there is a selected vet - dispatch update vet
    if (vaccineId) {
        this.props.dispatch(updateVaccine(vaccine, petId, vaccineId));
        this.props.history.push(`/pet-profile/${this.props.currentPet.id}`)
      }
      
      //If there is not selected vet - dispatch add vet
      if (!vaccineId) {
        this.props.dispatch(addVaccine(vaccine, petId));
         this.props.history.push(`/pet-profile/${this.props.currentPet.id}`)
      }
    }

    render() {
        return (
            <form onSubmit={this.handlesSubmit}>
            <fieldset>
                <legend>Vaccine Information</legend>
                <field
                    name="vaccineName"
                    type="text"
                    component={Input}
                    label="Vaccine Name"
                    validate={[required, nonEmpty]}
                />
                <field
                    name="dateAdministered"
                    type="date"
                    component={Input}
                    label="Date Administered"
                />
                <field
                    name="nextDueDate"
                    type="date"
                    component={Input}
                    label="Next Due Date"
                />
                 <field
                    name="notes"
                    type="text"
                    component={Input}
                    label="Additional Notes"
                />
            </fieldset>

            </form>

        );

    }
}

VaccineForm = connect(
    (state) => {
         return {
            redirect: state.petprofile.redirect,
            // initialValues: getInitialValues(state.petprofile.currentPet),
            loading: state.petprofile.loading,
            error: state.petprofile.error,
            currentPet: state.petprofile.currentPet,
            currentPetDetail: state.petprofile.currentPetDetail,
            formStatusEditing: state.petprofile.formStatusEditing,
        }
    }
)(VaccineForm);
       
export default VaccineForm


  