import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {createPetProfile, updatePetProfile, deletePetProfile} from '../../actions/petProfiles';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class PetProfileForm extends React.Component {
    onSubmit(values) {
        const {petName, breed, sex, type, birthdate, personality, likes, dislikes, physicalDescription, weight} = values;
        const pet = {petName, breed, sex, type, birthdate, personality, likes, dislikes, physicalDescription, weight};
        console.log(pet);        // const petId = props.match.params.petId;
        // let petId = this.props.match.params.petId;
        console.log(this.props.currentPet.id);
        console.log("submit button pushed");
        // const dispatched = this.props.formStatusEditing ? updatePetProfile : createPetProfile;
        // console.log(dispatched);
        // if (this.props.pet) {
        //     pet.id = this.props.pet.id
        // }
        if (this.props.formStatusEditing) {
            this.props.dispatch(updatePetProfile(pet, this.props.currentPet.id));
        }
        if (!this.props.formStatusEditing)
            this.props.dispatch(createPetProfile(pet));
        }
        // this.props.dispatch(dispatched(pet, this.props.currentPet.id));


    

    onClickDelete = () => {
        let petId = this.props.currentPet.id
        console.log(petId);
        console.log("getting back to on clicked delete");
        
        //message asking if they are sure they want to delete?
        this.props.dispatch(deletePetProfile(petId));
        }


    render() {
        if(this.props.redirect){
            return(
                 <Redirect to="/home"/>
            )
        }
        if (this.props.currentPet){
            // let buttonType = "Edit"
        }


        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
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


        return (
            <form
            onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}
            >
            {errorMessage}
             <fieldset>
                <legend>Pet Information</legend>
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
            {buttonType}
            <button><Link to="/home">Cancel</Link></button>
            </fieldset>
            </form>        
            );
    }
}


const getInitialValues = (currentPet) => {
    if (currentPet) {
        const { petName, breed, type, sex, birthdate, personality, likes, dislikes, weight, physicalDescription  } = currentPet;
        return { petName, breed, type, sex, birthdate, personality, likes, dislikes, weight, physicalDescription };
    }
    return { petName: '', breed: '', type: '', sex: '', birthdate: '', personality: '', likes: '', dislikes: '', weight: '', physicalDescription: ''};
}


PetProfileForm = reduxForm({
    form: 'pet-profile', // a unique identifier for this form
    onSubmitFail: (errors, dispatch) => dispatch(focus('pet-profile', 'petName')),
    enableReinitialize: true
  })(PetProfileForm)


  PetProfileForm = connect(
    (state) => {
        // const petId = props.match.params.petId;
        // console.log(this.props.currentPet.)
         return {
            redirect: state.petprofile.redirect,
            initialValues: getInitialValues(state.petprofile.currentPet),
            loading: state.petprofile.loading,
            error: state.petprofile.error,
            currentPet: state.petprofile.currentPet,
            formStatusEditing: state.petprofile.formStatusEditing
        }
    }
)(PetProfileForm);
       

export default PetProfileForm
   




