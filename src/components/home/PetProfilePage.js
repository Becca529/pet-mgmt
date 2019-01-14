import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import React from 'react';
import List from './List';
import Spinner from 'react-spinkit';
import PetProfileForm from './PetProfileForm';
import './PetProfilePage.css';


import {deletePetSubdocument, setCurrentPetDetail, clearPetDetail} from '../../actions/petProfiles';


export class PetProfilePage extends React.Component {

    // componentWillUnmount() {
    //     this.props.dispatch(clearPetDetail());
    //   }

    onClickView = (selectedDetail, form ) => {
        console.log(selectedDetail);
        console.log("getting back to onclick view");
        this.props.dispatch(setCurrentPetDetail(selectedDetail, form));
    
        //    setCurrentPet(selectedPet);
            // setPetProfile(selectedPet)
    }
        // Redirect to={`/vet/${subDocID}`}
        // this.props.dispatch(displayPetDetailEditForm(subDocID));
        
    
    onClickDelete = (subDocID, route) => {
        console.log(subDocID);
        const petId = this.props.match.params.petId;
        console.log(route);

        console.log("getting back to on clicked delete");
        //message asking if they are sure they want to delete?
        this.props.dispatch(deletePetSubdocument( petId, subDocID, route));
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
                const petId = this.props.match.params.petId;
                const vetList = currentPet.vetData.map((vet) => (
                    <li className="vet-record" key={currentPet.vetData.id}>
                        <List title={vet.clinicName} vet={vet} petId={petId} onClickView={this.onClickView} onClickDelete={this.onClickDelete} subtitle={vet.phoneNumber} id={vet._id} route='veterinarians'></List>
                    </li>
                ));
                return <ul className="vet-list">{vetList}</ul>;
            }



    render() {
        const petId = this.props.match.params.petId;
        let form = this.props.form;

        if (this.props.form && this.props.formStatusEditing) {
            return(
                <Redirect to={`/${form}/${petId}`}/>
                )
        }

        return (
            <div className="pet-profile-detailed-container">
                <div className="form-display"></div>
                    <PetProfileForm/>
                <div className="list-display">

                        <div className="detail-box">
                        <h2>Vet Info</h2>
                            <button><Link className="link-btn add-new" to={`/veterinarians/${petId}`}>Add New</Link></button> 
                            {this.renderVetList()}
                        </div>
                        <div className="detail-box">
                        <h4>Vaccines</h4> 
                            <button><Link className="link-btn" to={`/vaccines/${petId}`}>Add New</Link></button> 
                            {/* <List title={this.props.pet.vaccineData.vaccineName} subtitle={this.props.vaccineData.directions} route='medical' >Vaccines</List> */}
                        </div>
                        <div className="detail-box">
                        <h4>Pet-Sitting Information</h4>
                            <button><Link className="link-btn" to={`/sitters/${petId}`}>Add New</Link></button> 

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
        redirect: state.petprofile.redirect,
        currentPet: state.petprofile.currentPet,
        form: state.petprofile.form,
        currentPetDetail: state.petprofile.currentPetDetail,
        formStatusEditing: state.petprofile.formStatusEditing


    };
};

export default (connect(mapStateToProps))(PetProfilePage)