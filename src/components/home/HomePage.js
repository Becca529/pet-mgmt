import React from "react";
import { connect } from "react-redux";
import "./HomePage.css";
import Spinner from "react-spinkit";
import requiresLogin from "../common/RequiresLogin";
import {
  fetchPetProfiles,
  setCurrentPet,
  deletePetProfile,
  clearPetDetail
} from "../../actions/petProfiles";
import { Link } from "react-router-dom";
import PetProfileCard from "./PetProfileCard";

export class HomePage extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchPetProfiles());
    this.props.dispatch(clearPetDetail());

  }


  //Delete Pet profile (x) on profile cards - props passed to card component
  onClickDelete = petId => {
    console.log(petId);
    console.log("getting back to on clicked delete");

    this.props.dispatch(deletePetProfile(petId));
  };

  //View pet profile on profile cards - props passed to card component
  onClick = selectedPet => {
    console.log(selectedPet);
    console.log("getting back to onclick view");

    this.props.dispatch(setCurrentPet(selectedPet));
  };

  renderPetList() {
    const { error, loading, pets} = this.props;

    if (loading) {
      return <Spinner spinnername="circle" fadeIn="none" />;
    }

    if (error) {
      return <strong>{this.props.error}</strong>;
    }

    const petList = this.props.pets.map(pet => (
      <li key={pet.id}>
        <PetProfileCard
          onClick={this.onClick}
          onClickDelete={this.onClickDelete}
          pet={pet}
        />
      </li>
    ));

    return <ul className="pet-list">{petList}</ul>;
  }

  render() {
    return (
      <div className="home-page-container">
        <div className="divider"/>
        <div className="dashboard">
          <h1 className="dashboard-title">
            My Pet Profiles - {this.props.username}
          </h1>
          <button>
            <Link className="add-new-profile-btn" to="/petform/new">
              Add New Pet Profile
            </Link>
          </button>
          <div className="pet-profile-list">{this.renderPetList()}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPet: pet => dispatch(setCurrentPet(pet))
  };
};

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  console.log(state);
  return {
    username: state.auth.currentUser.username,
    pets: state.petprofile.petList,
    loading: state.petprofile.loading,
    error: state.petprofile.error,
    currentPet: state.petprofile.currentPet
  };
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
