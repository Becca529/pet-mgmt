import React from 'react';
import {Link} from 'react-router-dom';
import requiresLogin from '../common/RequiresLogin';
import './PetProfileCard.css';



export function List(props) {
//props to be passed in 1)title, subtitle, route, sub-doc-id
        return (
            <div className="pet-detail-list">
                <div className="pet-detail-title">{props.title} - {props.subtitle}- {props.id}</div>
                {/* <li><Link className="link-btn" to={`/${props.route}/${props.petId}/${props.id}`}>View/Edit</Link></li> */}
                <li><button className="btn" onClick={props.onClickView.bind(this, props.vet, props.route)}>View/Edit</button></li>
                <li><button className="btn" onClick={props.onClickDelete.bind(this, props.id, props.route)}>Delete</button></li>

                {/* <li><Link className="btn-link" onClick={props.onClickView.bind(this, props.id)} to={`/${props.route}/${props.id}`}>View/Edit</Link></li> */}
                {/* <li><Link className="btn-link" onClick={props.onClick.bind(this, profileDetail)} to={`/${props.route}/${props.subDocId}`}>Delete</Link></li> */}
            </div>
        ) 
}


// const mapStateToProps = state => {
//     const {currentUser} = state.auth;
//     return {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
//     };
// };

export default requiresLogin()(List);
