import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import Table from "./Table";
import Spinner from "react-spinkit";
import "./PetProfilePage.css";

import {deletePetSubdocument, setCurrentPetDetail, fetchPetProfile, clearPetDetail} from "../../actions/petProfiles";

export class PetProfilePage extends React.Component {
  componentDidMount() {
    const petId = this.props.match.params.petId;
    console.log(petId);
      this.props.dispatch(clearPetDetail());
      this.props.dispatch(fetchPetProfile(petId));
  }

  //View vet/subdocument button function in table
  onClickView = (selectedVet, form) => {
    const petId = this.props.match.params.petId;
    this.props.dispatch(setCurrentPetDetail(selectedVet));
    this.props.history.push(`/veterinarians/${petId}/${selectedVet._id}`);
  };

  //Delete vet/subdocument button function in table
  onClickDelete = (subDocId, route) => {
    const petId = this.props.match.params.petId;
    let indexToDelete = this.props.currentPet.vetData.findIndex(
      x => x._id === subDocId
    );
    this.props.dispatch(deletePetSubdocument(petId, subDocId, route, indexToDelete));
     this.props.history.push(`/pet-profile/${this.props.currentPet.id}`);
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
    const vetList = currentPet.vetData.map(vet => (
      <tr className="vet-record" key={vet.id}>
        <Table
          title={vet.clinicName}
          vet={vet}
          petId={petId}
          onClickView={this.onClickView}
          onClickDelete={this.onClickDelete}
          subtitle1={vet.phoneNumber}
          subtitle2={vet.emergencyAfterHours}
          id={vet._id}
          route="veterinarians"/>
      </tr>
    ));
    return (
      <table id="vets" className="vet-list">
        <tr>
          <th>Clinic</th>
          <th>Phone Number</th>
          <th>Emergency/After Hours</th>
          <th/>
        </tr>
        <tbody className >{vetList}</tbody>
      </table>
    );
  }

  render() {
    const petId = this.props.currentPet ? this.props.currentPet.id : null;
    return (
      <div className="pet-profile-detailed-container">
        <div className="row">
          <i className="fas fa-dog fa-5x pet-img-temp" />
        </div>
        <div className="row">
          <h1>{this.props.currentPet.petName}</h1>
          <button>
            <Link to={`/petform/${this.props.currentPet.id}`}>
              View Pet Summary
            </Link>
          </button>
        </div>
        <div className="list-display">
          <div className="row">
            <div className="detail-box">
              <h2>Vet Info</h2>
              <button>
                <Link
                  className="link-btn add-new"
                  to={`/veterinarians/${petId}`}
                  >Add New
                </Link>
              </button>
              <div className="vet-table-container row">
              {this.renderVetList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.petprofile.redirect,
    currentPet: state.petprofile.currentPet,
    form: state.petprofile.form,
    currentPetDetail: state.petprofile.currentPetDetail,
    formStatusEditing: state.petprofile.formStatusEditing,
    currentVets: state.petprofile.currentVets,
  };
};

export default connect(mapStateToProps)(PetProfilePage);
