import React, { Component } from 'react';
import {connect} from 'react-redux';
import './HomePage.css';
import Spinner from 'react-spinkit';
import requiresLogin from '../common/RequiresLogin';
import {fetchPetProfiles, setCurrentPet} from '../../actions/fetchPetProfiles';
import {Link} from 'react-router-dom';
import PetProfileCard from './PetProfileCard';


export class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPetProfiles());
    }

    onClick = (selectedPet) => {
        console.log(selectedPet);
        console.log("getting back to onclick");
        this.props.dispatch(setCurrentPet(selectedPet));

    //    setCurrentPet(selectedPet);
        // setPetProfile(selectedPet)
        }



    renderPetList() {
        const { error, loading, pets, selectedPet } = this.props;

        if (loading) {
            return <Spinner spinnername="circle" fadeIn='none'/>;
        }

        if (error) {
            return <strong>{this.props.error}</strong>;
        }

        // if(selectedPet !== null){
        //     console.log(selectedPet);
        // //     return <div></div>
        // }

        const petList = pets.map((pet) => (
            <li key={pet.id}>
                <PetProfileCard onClick={this.onClick} pet={pet}></PetProfileCard>
            </li>
        ));

        // const petList = ({pets, setPet}) =>
        //     pets.map((pet, index) =>
        //     <li key={pet.id}>
        //         <PetProfileCard onClick={setPet(index +1)} pet={pet}></PetProfileCard>
        //     </li>
        //     )

        return <ul className="pet-list">{petList}</ul>;
    }
       
    

    render() {

        return (
            <div className="home-page">
                <div className="divider">divider image</div>
                <div className="dashboard">
                    <h1 className="page-title">My Pet Profiles - {this.props.username}</h1>
                    <Link className="add-new-profile btn-link" to="/pet-profile">Add New Pet Profile</Link>
                    <div className="pet-profile-list">
                        {this.renderPetList()}
                    </div>
                </div>
            </div>
        );
        }
    }

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPet: (pet) => dispatch(setCurrentPet(pet)),
    }
}


const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state);
    return {
        username: state.auth.currentUser.username,
        pets: state.petprofile.petList,
        loading: state.petprofile.loading,
        error: state.petprofile.error,
        selectedPet: state.petprofile.selectedPet
    }
}
    


export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(HomePage));
