import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import React from 'react';
import List from './List';
import {deletePetSubdocument, setCurrentPet} from '../../actions/deletePetProfiles';


export class PetProfilePage extends React.Component {

    onClickEdit = (subDocID) => {
        console.log(subDocID);
        console.log("getting back to onclick edit");
        // this.props.dispatch(displayPetDetailEditForm(subDocID));
    }
    onClickDelete = (subDocID) => {
        console.log(subDocID);
        console.log("getting back to on clicked delete");
        //message asking if they are sure they want to delete?
        this.props.dispatch(deletePetSubdocument(subDocID));
        }


     onClickAddNew = (petID) => {
            console.log(petID);
            console.log("getting back to click add new");
            //route to forms? 
            // this.props.dispatch(editCurrentSubDocument(subDocID));
            // this.props.dispatch(setCurrentPet(selectedPet));
            }
    



    render() {
        return (
            <div className="pet-profile-detailed">
                <div className="form-display"></div>
                    <div className="list-display">

                        <h4>Vet Info</h4> 
                            <button><li><Link className="btn-link" onClick={this.props.addNew.bind(this, this.props.pet)} to={`/vet/${this.props.pet.id}`}>Add New</Link></li></button>
                        {/* loop through and display each vet subdocument here */}
                            <List title={this.props.pet.vetData.clinicName} subtitle={this.props.vetData.phoneNumber} route='vet'>Vet Information</List>

                        <h4>Vaccines</h4> 
                            <button><li><Link className="btn-link" onClick={this.props.addNew.bind(this, this.props.pet)} to={`/medical/${this.props.pet.id}`}>Add New</Link></li></button>
                            <List title={this.props.pet.vaccineData.vaccineName} subtitle={this.props.vaccineData.directions} route='medical' >Vaccines</List>

                        <h4>Pet-Sitting Information</h4>
                            <button><li><Link className="btn-link" onClick={this.props.addNew.bind(this, this.props.pet)} to={`/pet-sitting/${this.props.pet.id}`}>Add New</Link></li></button>
                            <List title={this.props.pet.petSittingData.foodType} subtitle={this.props.petSittingData.quantity} route='pet-sitting'>Pet-Sitting</List>                
                    </div>
            </div>
        )
    }
}

   

const mapStateToProps = state => {
    return {
        shouldRedirect: state.shouldRedirect,
        pet: state.petprofile.pet
    };
};

export default (connect(mapStateToProps))(PetProfilePage)