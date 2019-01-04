import React from 'react';
import {reduxForm, push, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {required, nonEmpty } from '../../validators';
import {createPetProfile} from '../../actions/createPetProfile';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';


export class PetProfileForm extends React.Component {
   
    onSubmit(values) {
        const {petName, breed, sex, birthdate, personality, likes, dislikes, physicalDescription, weight} = values;
        const pet = {petName, breed, sex, birthdate, personality, likes, dislikes, physicalDescription, weight};
        console.log(pet);
        console.log("submit button pushed");
        return this.props
            .dispatch(createPetProfile(pet))
            // .dispatch(push('/home'));
    }


    render() {

        if(this.props.shouldRedirect.petprofile.shouldRedirect){
            console.log(this.props.shouldRedirect.petprofile.shouldRedirect)
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


        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {errorMessage}
                {/* <p>BLAH {this.props.shouldRedirect}</p> */}
                 <fieldset>
                    <legend>Create a New Pet Profile</legend>
                      {/* PHOTO */}
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
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <button><Link to="/home">Cancel</Link></button>
                </fieldset>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        shouldRedirect: state
    };
};

PetProfileForm = connect(
    mapStateToProps
)(PetProfileForm);


export default reduxForm({
    form: 'pet-profile',
    onSubmitFail: (errors, dispatch) => dispatch(focus('pet-profile', 'username'))
})(PetProfileForm);




