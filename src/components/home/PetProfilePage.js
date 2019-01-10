import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import React from 'react';
import List from './List';
import Spinner from 'react-spinkit';
import PetProfileForm from './PetProfileForm';

import {deletePetSubdocument, setCurrentPet} from '../../actions/deletePetProfile';


export class PetProfilePage extends React.Component {

    onClickView = (subDocID ) => {
        console.log(subDocID);
        console.log("getting back to onclick edit");
        // Redirect to={`/vet/${subDocID}`}
        // this.props.dispatch(displayPetDetailEditForm(subDocID));
        
    }
    onClickDelete = (subDocID) => {
        console.log(subDocID);
        const petId = this.props.match.params.petId;

        console.log("getting back to on clicked delete");
        //message asking if they are sure they want to delete?
        this.props.dispatch(deletePetSubdocument(subDocID, petId));
        }


     onClickAddNew = (petID) => {
            console.log(petID);
            console.log("getting back to click add new");
            //route to forms? 
            // this.props.dispatch(editCurrentSubDocument(subDocID));
            // this.props.dispatch(setCurrentPet(selectedPet));
            }

    renderVetList() {
                const { error, loading, currentPet } = this.props;
        
                if (loading) {
                    return <Spinner spinnername="circle" fadeIn='none'/>;
                }
        
                if (error) {
                    return <strong>{this.props.error}</strong>;
                }
        
                const vetList = currentPet.vetData.map((vet) => (
                    <li key={currentPet.vetData.id}>
                        <List title={vet.clinicName} onClickView={this.onClickView} onClickDelete={this.onClickDelete} subtitle={vet.phoneNumber} id={vet._id} route='vet'></List>
                    </li>
                ));
                return <ul className="pet-list">{vetList}</ul>;
            }



    render() {
        const petId = this.props.match.params.petId;

        return (
            <div className="pet-profile-detailed">
                <div className="form-display"></div>
                    <PetProfileForm/>
                <div className="list-display">

                        <div className="detail-box">
                        <h4>Vet Info</h4> 
                            <button><li><Link className="btn-link" to={`/vet/${petId}`}>Add New</Link></li></button> 
                        {/* loop through and display each vet subdocument here */}
                            {/* <List title={this.props.pet.vetData.clinicName} subtitle={this.props.vetData.phoneNumber} route='vet'>Vet Information</List> */}
                            {this.renderVetList()}
                        </div>
                        <div className="detail-box">
                        <h4>Vaccines</h4> 
                            <button><li><Link className="btn-link" to={`/medical/${petId}`}>Add New</Link></li></button> 
                            {/* <List title={this.props.pet.vaccineData.vaccineName} subtitle={this.props.vaccineData.directions} route='medical' >Vaccines</List> */}
                        </div>
                        <div className="detail-box">
                        <h4>Pet-Sitting Information</h4>
                            <button><li><Link className="btn-link" to={`/pet-sitting/${petId}`}>Add New</Link></li></button> 

                            {/* <button><li><Link className="btn-link" onClick={this.props.addNew.bind(this, this.props.pet)} to={`/pet-sitting/${this.props.pet.id}`}>Add New</Link></li></button>
                            <List title={this.props.pet.petSittingData.foodType} subtitle={this.props.petSittingData.quantity} route='pet-sitting'>Pet-Sitting</List>                 */}
                        </div>
                    </div>
            </div>
        )
    }
}

   

const mapStateToProps = state => {
    console.log(state);
    return {
        shouldRedirect: state.shouldRedirect,
        pet: state.petprofile.pet,
        currentPet: state.petprofile.currentPet
        
    };
};

export default (connect(mapStateToProps))(PetProfilePage)