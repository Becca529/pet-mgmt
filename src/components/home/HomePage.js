import React from 'react';
import {connect} from 'react-redux';
import Header from '../common/Header';
import './HomePage.css';

import requiresLogin from '../common/RequiresLogin';
import {fetchPetProfiles} from '../../actions/fetchPetProfiles';
import {Link} from 'react-router-dom';
import PetProfileCard from './PetProfileCard';


export class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPetProfiles());
    }

  

    render() {
        // const { error, loading, pets } = this.props;
        // const petProfiles = this.props.petprofile.pets.map((petProfile, index)=> (
        //          <li className="pet-profile-wrapper" key= {index}>
        //             <PetProfileCard index={index} {...petProfile} />
        //         </li>
        // ))


        // if (error) {
        //     return <div>Error! {error.message}</div>;
        // }
    
        // if (loading) {
        //     return <div>Loading...</div>;
        // }
        // this.props.petlist.petprofile.petlist
        return (
            <div className="home-page">
                <div className="divider">divider image
                <p>bah- {this.props.petlist.petprofile.petlist}</p>
                {/* <p>bah- {this.props.pets.petlist}</p> */}
                <p>bah- {this.props.loading.petprofile.loading}</p>

                </div>
                <div className="dashboard">
                    <h1 className="page-title">My Pet Profiles - {this.props.username}</h1>
                    <Link className="add-new-profile btn-link" to="/pet-profile">Add New Pet Profile</Link>
                    <ul>
                        {/* <li>{petProfiles}</li> */}
                        {/* {pets.map(pet =>
                            <li key={pet.id}>{pet.petName}</li>
                        )} */}
                    </ul>
                </div>
            </div>
        );
        }
    }


const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        petlist: state.petprofile.petlist,
        loading: state.petprofile.loading,
        error: state.petprofile.error
    };
};

export default requiresLogin()(connect(mapStateToProps)(HomePage));
