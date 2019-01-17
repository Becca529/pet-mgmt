import React from "react";
import { Link } from "react-router-dom";
import requiresLogin from "../common/RequiresLogin";
import "./PetProfileCard.css";
import { deletePetProfile } from "../../actions/petProfiles";

export function PetProfileCard(props) {
  
const { pet } = props;

  return (
    <div className="pet-profile w3-card">
      <div className="pet-delete-btn">
        <i
          onClick={props.onClickDelete.bind(this, pet.id)}
          className="far fa-times-circle pet-delete-btn"
        />
      </div>
      <i className="fas fa-dog fa-3x pet-img-temp" />
      <div className="container">
        <p className="card-title">{pet.petName} </p>
        <ul className="pet-profile-nav">
          <li>
            <Link
              className="btn-link"
              onClick={props.onClick.bind(this, pet)}
              to={`/pet-profile/${pet.id}`}>
              View Pet Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default requiresLogin()(PetProfileCard);
