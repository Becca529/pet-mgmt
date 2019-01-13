import React from 'react';
import {Link} from 'react-router-dom';
import requiresLogin from '../common/RequiresLogin';
import './PetProfileCard.css';
import {deletePetProfile} from '../../actions/petProfiles';





export function PetProfileCard(props) {
const {pet} = props

        return (
            <div className="pet-profile w3-card">
            <img className="pet-profile-img" src="img_avatar.png" alt="pet"/>
            <div className="container">
                <h4>{pet.petName} </h4> 
                <ul className="pet-profile-nav">
                <li><Link className="btn-link" onClick={props.onClick.bind(this, pet)} to={`/pet-profile/${pet.id}`}>View Pet Profile</Link></li>
                    {/* <li><Link className="btn-link" to={`/pet-profile/${pet.id}`}>Pet Profile</Link></li> */}
                </ul>
            </div>
        </div>
        );

        
    }


// const mapStateToProps = state => {
//     const {currentUser} = state.auth;
//     return {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
//     };
// };

export default requiresLogin()(PetProfileCard);
