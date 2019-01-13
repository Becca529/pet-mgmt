import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from '../common/Input';
import {Redirect, Link} from 'react-router-dom';
import {addSitterFood, updateSitterFood, deleteSitterFood} from '../../actions/sitters';

import {connect} from 'react-redux';




export class FoodForm extends React.Component {
    onSubmit(values) {
        let type = 'pet-sitting-food'
        const {foodType, foodQuantity, foodFrequency, notes} = values;
        const foodInfo = {foodType, foodQuantity, foodFrequency, notes, type};
        const petid = this.props.match.params.petId;
        return this.props
            .dispatch(addSitterFood(foodInfo, petid))
    }

    render() {
        const petId = this.props.match.params.petId;
        if (this.props.redirect) {
            return (
                <Redirect to={`/pet-profile/${petId}`}/>
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
                    <legend>Food Details</legend>
                <Field
                    name="foodType"
                    type="text"
                    component={Input}
                    label="Food Type"
                />
                <Field
                    name="foodQuantity"
                    type="text"
                    component={Input}
                    label="Quantity of Food"
                />
                  <Field
                    name="foodFrequency"
                    type="text"
                    component={Input}
                    label="Food Frequency"
                />
                  <Field
                    name="note"
                    type="text"
                    component={Input}
                    label="Notes"
                />
                </fieldset>
                <button 
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <button><Link to={`/pet-profile/${petId}`}>Cancel</Link></button>
            </form>
        );
    }
}

const mapStateToProps = (state, props) => {
    const petId = props.match.params.petId;
     return {
        redirect: state.petprofile.redirect,
        currentPet: state.petprofile.currentPet,
        loading: state.petprofile.loading,
        error: state.petprofile.error,
    };
};

FoodForm = connect(
    mapStateToProps
)(FoodForm);

export default reduxForm({
    form: 'food',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('food', Object.keys(errors)[0]))
})(FoodForm);