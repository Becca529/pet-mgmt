import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {createPetProfile, updatePetProfile, deletePetProfile, clearPetDetail} from '../../actions/petProfiles';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './PetProfilePage.css';


export class PetProfileForm extends React.Component {
    
    onSubmit(values) {
        const {petName, breed, sex, type, birthdate, personality, likes, dislikes, physicalDescription, weight} = values;
        const pet = {petName, breed, sex, type, birthdate, personality, likes, dislikes, physicalDescription, weight};
        console.log(pet); 
        console.log("pet profile form submit button pushed");     
        const petId = this.props.currentPet ? this.props.currentPet.id : null;
console.log(petId);
        //If there is current pet - dispatch update pet
        if (petId) {
            this.props.dispatch(updatePetProfile(pet, petId));
        }
        //If there is no current pet - dispatch add new pet
        if (!petId)
            this.props.dispatch(createPetProfile(pet));
        }
       

    onClickDelete = () => {
        let petId = this.props.currentPet.id
        console.log(petId);
        console.log("getting back to on clicked delete");
        
        //message asking if they are sure they want to delete?
        this.props.dispatch(deletePetProfile(petId));
        }

    onClickCancel = () => {
         this.props.dispatch(clearPetDetail());
        return <Redirect to={`/pet-profile/${this.props.currentPet.id}`} />;

    }


    render() {

        //  if(this.props.redirect && !this.props.formStatusEditing){
        //      return(
        //           <Redirect to="/home"/>
        //           )
        // }

    let petId = this.props.currentPet ? this.props.currentPet.id : null;

       if (!this.props.redirect && !this.props.formStatusEditing && !this.props.form && !petId)  {
        console.log("redirecting to pet profile from pet form ");
        return <Redirect to={`/pet-profile/${this.props.currentPet.id}`} />;
      }

      if (this.props.redirect && !this.props.formStatusEditing) {
        console.log("redirecting to home from pet form");
        return <Redirect to="/home" />;
      }


        
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }   
        let buttonType
        //If there is a pet - update pet buttons
        console.log(petId);
        if (petId) {
            buttonType = (<div className="editForm-btn">
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>Update</button>
                <button><Link to={`/pet-profile/${this.props.currentPet.id}`}>Cancel</Link></button>
                </div>)
        }
        //If there is not a pet - add pet buttons
        if (!petId) {
            buttonType = (<div className= "addForm-btn">
            <button type="submit"disabled={this.props.pristine || this.props.submitting}>Submit</button>
            <button><Link to="/home">Cancel</Link></button>
            </div>)

        }


        return (
        <div className="pet-profile-container"> 
            <form className="pet-profile-form"
                onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values))}
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
            <div className = "row">
                {buttonType}
            </div>
            </fieldset>
            </form>    
        </div>    
        );
    }
}


const getInitialValues = (currentPet) => {
    if (currentPet) {
        const { petName, breed, type, sex, birthdate, personality, likes, dislikes, weight, physicalDescription  } = currentPet;
        return { petName, breed, type, sex, birthdate, personality, likes, dislikes, weight, physicalDescription };
    }
    // return { petName: '', breed: '', type: '', sex: '', birthdate: '', personality: '', likes: '', dislikes: '', weight: '', physicalDescription: ''};
}

PetProfileForm = reduxForm({
    form: 'pet-profile', 
    onSubmitFail: (errors, dispatch) => dispatch(focus('pet-profile', 'petName')),
    // enableReinitialize: true
  })(PetProfileForm)

  PetProfileForm = connect(
    (state) => {
        console.log(state);
         return {
            redirect: state.petprofile.redirect,
            initialValues: getInitialValues(state.petprofile.currentPet),
            loading: state.petprofile.loading,
            error: state.petprofile.error,
            currentPet: state.petprofile.currentPet,
            formStatusEditing: state.petprofile.formStatusEditing,
        }
    }
)(PetProfileForm);
       
export default PetProfileForm
   




