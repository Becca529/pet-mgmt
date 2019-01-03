import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import requiresLogin from '../common/RequiresLogin';


export class PetProfile extends React.Component {

    render() {

        return (
            <div className="pet-profile w3-card">
            <img className="pet-profile-img" src="img_avatar.png" alt="pet"/>
            <div className="container">
                <h4>Name</h4> 
                <p>Type</p>
                <div className="pet-profile-nav">
                    <Link className="btn-link" to="/add">Profile</Link>
                    <Link className="btn-link" to="/vet">Vet</Link>
                    <Link className="btn-link" to="/medical">Medical</Link>
                    <Link className="btn-link" to="/pet-sitting">Pet Sitting</Link>
                </div>
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
    };
};

export default requiresLogin()(connect(mapStateToProps)(PetProfile));
