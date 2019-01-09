import React from 'react';
import {Link} from 'react-router-dom';
import requiresLogin from '../common/RequiresLogin';
import './PetProfileCard.css';




export function List(props) {
 const {profileDetail} = props
//props to be passed in 1)title, subtitle, route, sub-doc-id
        return (
            <div className="pet-detail-list">
                <div className="pet-detail-title">{props.title}</div>
                <div className="pet-detail-sub-title">{props.subtitle}</div>
                <li><Link className="btn-link" onClick={props.onClickEdit.bind(this, profileDetail)} to={`/${props.route}/${props.subDocId}`}>View/Edit</Link></li>
                <li><Link className="btn-link" onClick={props.onClickDelete.bind(this, profileDetail)} to={`/${props.route}/${props.subDocId}`}>Delete</Link></li>
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
