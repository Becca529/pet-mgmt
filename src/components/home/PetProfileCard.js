import React from 'react';
import {Link} from 'react-router-dom';
import requiresLogin from '../common/RequiresLogin';
import './PetProfileCard.css';




export function PetProfileCard(props) {
const {pet} = props

        return (
            <div className="pet-profile w3-card">
            <img className="pet-profile-img" src="img_avatar.png" alt="pet"/>
            <div className="container">
                <h4>{pet.petName} </h4> 
                <p>{pet.type} </p>
                <ul className="pet-profile-nav">
                {/* <li><Link className="btn-link" onClick={props.onClick.bind(this, pet)} to={`/pet-profile/${pet.id}`}>Pet Profile</Link></li> */}
                    <li><Link className="btn-link" to={`/pet-profile/${pet.id}`}>Pet Profile</Link></li>
                    <li><Link className="btn-link" to={`/vet/${pet.id}`}>Vet</Link></li>
                    <li><Link className="btn-link" to={`/medical/${pet.id}`}>Vaccines</Link></li>
                    <li><Link className="btn-link" to={`/pet-sitting/${pet.id}`}>Pet Sitting</Link></li>
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
