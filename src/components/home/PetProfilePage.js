import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import React from 'react';
import PetProfileForm from './PetProfileForm'

export class PetProfilePage extends React.Component {

    render() {
        if(this.props.shouldRedirect){
            return(
                <Redirect to="/home"/>
            )
        }
        else {
            return(
                <PetProfileForm />
            )
        }
    }

}
const mapStateToProps = state => {
    return {
        shouldRedirect: state.shouldRedirect
    };
};

export default (connect(mapStateToProps))(PetProfilePage)