import React from 'react';
import {Link} from 'react-router-dom';
import requiresLogin from '../common/RequiresLogin';
import './PetProfileCard.css';
import './List.css';



export function List(props) {
        return (
            <div className="pet-detail-list">
               <p className="pet-detail-title">{props.title} - {props.subtitle}- {props.id}</p>
                {/* <li><Link className="link-btn" to={`/${props.route}/${props.petId}/${props.id}`}>View/Edit</Link></li> */}
                <button className="link" onClick={props.onClickView.bind(this, props.vet, props.route)}>View/Edit</button>
                <button className="link" onClick={props.onClickDelete.bind(this, props.id, props.route)}>Delete</button>

                {/* <li><Link className="btn-link" onClick={props.onClickView.bind(this, props.id)} to={`/${props.route}/${props.id}`}>View/Edit</Link></li> */}
                {/* <li><Link className="btn-link" onClick={props.onClick.bind(this, profileDetail)} to={`/${props.route}/${props.subDocId}`}>Delete</Link></li> */}
            </div>
        ) 
}


export default requiresLogin()(List);
