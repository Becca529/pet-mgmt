import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import React from "react";
import Table from "./Table";
import Spinner from "react-spinkit";
import PetProfileForm from "./PetProfileForm";
import "./PetProfilePage.css";

import {
  deletePetSubdocument,
  setCurrentPetDetail,
  fetchPetProfile,
  setFormEdit,
  clearPetDetail
} from "../../actions/petProfiles";

export class PetProfilePage extends React.Component {
  
    componentDidlMount() {
    this.props.dispatch(clearPetDetail());
  }
  // //         const petId = this.props.currentPet ? this.props.currentPet.id : null;
  // // console.log("petId-", petId);
  //  this.props.dispatch(fetchPetProfile(petId));
  //     }

  onClickView = (selectedDetail, form) => {
    console.log(selectedDetail);
    console.log("getting back to onclick view");
    this.props.dispatch(setCurrentPetDetail(selectedDetail, form));

    //    setCurrentPet(selectedPet);
    // setPetProfile(selectedPet)
  };
  // Redirect to={`/vet/${subDocID}`}
  // this.props.dispatch(displayPetDetailEditForm(subDocID));

  onClickDelete = (subDocId, route) => {
    console.log(subDocId);
    const petId = this.props.match.params.petId;
    console.log(route);
    console.log(petId);
    let indexToDelete = this.props.currentPet.vetData.findIndex(
      x => x._id === subDocId
    );
    console.log(indexToDelete);

    console.log("getting back to on clicked delete");
    this.props.dispatch(
      deletePetSubdocument(petId, subDocId, route, indexToDelete)
    );
  };

  onClickAddNew = petID => {
    console.log(petID);
    console.log("getting back to click add new");
    //route to forms?
    // this.props.dispatch(editCurrentSubDocument(subDocID));
    // this.props.dispatch(setCurrentPet(selectedPet));
  };

  onClickChangeForm = (form) => {
    console.log(form);
    console.log("getting back to onclick form");
    const petId = this.props.match.params.petId;

    this.props.dispatch(setFormEdit("petform"));
  };

  renderVetList() {
    const { error, loading, currentPet } = this.props;

    if (loading) {
      return <Spinner spinnername="circle" fadeIn="none" />;
    }

    if (error) {
      return <strong>{this.props.error}</strong>;
    }
    const petId = this.props.match.params.petId;
    const vetList = this.props.currentVets.map(vet => (
      <tr className="vet-record" key={vet.id}>
        <Table
          title={vet.clinicName}
          vet={vet}
          petId={petId}
          onClickView={this.onClickView}
          onClickDelete={this.onClickDelete}
          subtitle={vet.phoneNumber}
          id={vet._id}
          route="veterinarians"
        />
      </tr>
    ));

    return (
      <table id="vets" className="vet-list">
        <tr>
          <th>Clinic</th>
          <th>Phone Number</th>
          <th />
        </tr>
        <tbody>{vetList}</tbody>
      </table>
    );
  }

  render() {
    const petId2 = this.props.match.params.petId;
    let form = this.props.form;
    const petId = this.props.currentPet ? this.props.currentPet.id : null;
    console.log(petId);
    console.log(this.props.form);
    console.log(this.props.formStatusEditing);


    if (this.props.form && this.props.formStatusEditing && this.props.redirect) {
      console.log("redirecting to form from petprofilepage");
      return(
        <Redirect to={`/${form}/${petId}`}/>
       )
}
    return (
      <div className="pet-profile-detailed-container">
        <div className="row">
      <i className="fas fa-dog fa-5x pet-img-temp" />
      </div>
        <div className="row">
          <h1>{this.props.currentPet.petName}</h1>
          <button className="btn-link" onClick={this.onClickChangeForm}>View Pet Summary </button>
        </div>
        <div className="list-display">
          <div className="row">
            <div className="detail-box">
              <h2>Vet Info</h2>
              <button>
                <Link
                  className="link-btn add-new"
                  to={`/veterinarians/${petId}`}
                >
                  Add New
                </Link>
              </button>
              {this.renderVetList()}
            </div>
          </div>
          <div className="row">
            <div className="detail-box">
              <h4>Vaccines</h4>
              <button>
                <Link className="link-btn" to={`/vaccines/${petId}`}>
                  Add New
                </Link>
              </button>
              {/* <List title={this.props.pet.vaccineData.vaccineName} subtitle={this.props.vaccineData.directions} route='medical' >Vaccines</List> */}
            </div>
          </div>
          <div row>
            <div className="detail-box">
              <h4>Pet-Sitting Information</h4>
              <button>
                <Link className="link-btn" to={`/sitters/${petId}`}>
                  Add New
                </Link>
              </button>

              {/* <button><li><Link className="btn-link" onClick={this.props.addNew.bind(this, this.props.pet)} to={`/pet-sitting/${this.props.pet.id}`}>Add New</Link></li></button>
                            <List title={this.props.pet.petSittingData.foodType} subtitle={this.props.petSittingData.quantity} route='pet-sitting'>Pet-Sitting</List>                 */}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    redirect: state.petprofile.redirect,
    currentPet: state.petprofile.currentPet,
    form: state.petprofile.form,
    currentPetDetail: state.petprofile.currentPetDetail,
    formStatusEditing: state.petprofile.formStatusEditing,
    currentVets: state.petprofile.currentVets
  };
};

export default connect(mapStateToProps)(PetProfilePage);
