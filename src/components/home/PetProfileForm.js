import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {createPetProfile} from '../../actions/createPetProfile';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
const editPetProfile = createPetProfile;
// const {pet} = props.location.state

export class PetProfileForm extends React.Component {
    onSubmit(values) {
        const {petName, breed, sex, type, birthdate, personality, likes, dislikes, physicalDescription, weight} = values;
        const pet = {petName, breed, sex, type, birthdate, personality, likes, dislikes, physicalDescription, weight};
        console.log(pet);
        console.log("submit button pushed");
        const dispatched = this.props.pet ? editPetProfile : createPetProfile
        if (this.props.pet) {
            pet.id = this.props.pet.id
        }
        return this.props
            .dispatch(dispatched(pet))
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
            <button 
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>Submit</button>
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
    // return { petName: '', breed: '', type: '', sex: '', birthdate: '', personality: '', likes: '', dislikes: '', weight: '', physicalDescription: ''};
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
            currentPet: state.petprofile.currentPet
        }
    }
)(PetProfileForm);
       

export default PetProfileForm
   




