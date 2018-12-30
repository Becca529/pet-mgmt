import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './RequiresLogin';
import {fetchProtectedData} from '../actions/protected-data';
import {Link} from 'react-router-dom';


export class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="home-page">
                <div className="divider">divider image</div>
                    <div className="main">
                        <div className="dashboard-username">
                        Username: {this.props.username}
                            <div className="dashboard">
                                <Link className="add-new-profile" to="/pets">Add New Pet Profile</Link>
                                <div className="pet-profiles">My Pet Profiles</div>
                                    Protected data: {this.props.protectedData}
                            </div>
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
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(HomePage));
