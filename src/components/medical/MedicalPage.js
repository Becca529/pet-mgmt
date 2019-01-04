import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../common/RequiresLogin';
// import {fetchDashboard} from '../../actions/fetchPetProfiles';
import {Link} from 'react-router-dom';


export class MedicalPage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(fetchDashboard());
    }

  

    render() {
        const petProfiles = this.props.lists.map((petProfile, index)=> (
            <li className="pet-profile-wrapper" key= {index}>
                {/* <PetProfile index={index} {...petProfile} /> */}
            
            </li>
                
            ))
        return (
            <div className="vet-page">
                <div className="divider">divider image</div>
                    <div className="dashboard">
                        <h1>My Pet Profiles</h1>
                        <Link className="add-new-profile btn-link" to="/add">Add New Pet Profile</Link>
                        <ul className="pet-profile-list"> 
                            {petProfiles}
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
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(MedicalPage));
