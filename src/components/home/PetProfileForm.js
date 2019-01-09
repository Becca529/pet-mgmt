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
   
    componentDidMount() {
        console.log(this.props.currentPet);
        // console.log(this.props.petName);
        // console.log(this.props.currentPet.petName);
        this.handleInitialize();
      }


    onSubmit(values) {
        const {petName, breed, sex, birthdate, personality, likes, dislikes, physicalDescription, weight} = values;
        const pet = {petName, breed, sex, birthdate, personality, likes, dislikes, physicalDescription, weight};
        console.log(pet);
        console.log("submit button pushed");
        const dispatched = this.props.pet ? editPetProfile : createPetProfile
        if (this.props.pet) {
            pet.id = this.props.pet.id
        }
        return this.props
            .dispatch(dispatched(pet))
    }

    handleInitialize() {
        const initData = {
            // petName: this.props.currentPet.petName,
        }
        this.props.initialize(initData);
      }

    render() {
        if(this.props.redirect){
            return(
                 <Redirect to="/home"/>
            )
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }   
        // const {petProps} = this.props.location.state.pet


        return (
            // {petProfileForm}
            <form
            onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}
            >
            {errorMessage}
            <p>Props-{this.props.redirect}</p>
             <fieldset>
                <legend>Create a New Pet Profile</legend>
                  {/* PHOTO */}
            <Field
                name="petName"
                type="text"
                component={Input}
                label="Pet Name"
                validate={[required, nonEmpty]}
                // value={this.props.pet}
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
                disabled={this.props.pristine || this.props.submitting}>
                Submit
            </button>
            <button><Link to="/home">Cancel</Link></button>
            </fieldset>
            </form>        );
    }
}

const mapStateToProps = (state, props) => {
    const petId = props.match.params.petId;
    console.log(state);
     return {
        redirect: state.petprofile.redirect,
        currentPet: state.petprofile.currentPet,
        // petName: state.petprofile.currentPet.petName,
        petID: petId,
        initialValues: getInitialValues(state.petprofile.currentPet)


    };
};

const getInitialValues = (currPet) => {
    if (currPet) {
        const { petName, breed, type } = currPet;
        return { petName, breed, type };
    }
    return { petName: '', breed: '', type: ''};
}

PetProfileForm = connect(
    mapStateToProps
)(PetProfileForm);


export default reduxForm({
    form: 'pet-profile',
    onSubmitFail: (errors, dispatch) => dispatch(focus('pet-profile', 'petName')),
    enableReinitialize: true
})(PetProfileForm);




