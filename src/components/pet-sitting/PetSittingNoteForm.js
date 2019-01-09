import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
// import {required, nonEmpty } from '../../validators';
import {Redirect, Link} from 'react-router-dom';
import {addPetSubdocument} from '../../actions/createPetProfile';
import {connect} from 'react-redux';




export class PetSittingNoteForm extends React.Component {
    onSubmit(values) {
        let type = "pet-sitting-note"
        const {noteName, note} = values;
        const petNote = {noteName, note};
        const petid = this.props.match.params.petId;
        console.log(petid);
        return this.props
            .dispatch(addPetSubdocument(petNote, petid, type))
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
                    <legend>Petsitting Notes</legend>
                />
                <Field
                    name="noteName"
                    type="text"
                    component={Input}
                    label="Note Name"
                />
                  <Field
                    name="note"
                    type="text"
                    component={Input}
                    label="Additional Petsitting Note"
                />
                </fieldset>
                <button 
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <button><Link to="/home">Cancel</Link></button>
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
        error: state.petprofile.error
    };
};

PetSittingNoteForm = connect(
    mapStateToProps
)(PetSittingNoteForm);


export default reduxForm({
    form: 'pet-sitting-note',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('pet-sitting-note', Object.keys(errors)[0]))
})(PetSittingNoteForm);