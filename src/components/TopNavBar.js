import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';
import './TopNavBar.css';


export class TopNavBar extends React.Component {
  logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
  }

  render() {
    if (this.props.loggedIn){
        let logOutButton = (
            <button onClick={() => this.logOut()}>Log out</button>
        );

        return (
            <div className="signed-in-top-nav-bar">
                <div className="home-logo">
                    <Link to="/home">Home</Link>
                </div>
                <div>{logOutButton}</div>
            </div>
        );
    }
    else {
        return (
            <div className="signed-out-top-nav-bar">
                <div className="home-logo">
                    <Link to="/">Home</Link>
                </div>
            <Link to="/register" className="signed-out-link">Sign Up</Link>
            <Link to="/signin" className="signed-out-link" >Sign In</Link>
            </div>
        )}
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TopNavBar);


// class TopNavbar extends Component {
//   render() {
//     return (
//       <nav role="navigation">
//       <div class="topnav">
//       {/* <img class="logo" src="god" alt="home-logo"> */}
//         <a class="active" href="#home">Home</a>
//         <a href="#news">My Pet Community</a>
//         <a href="#acount">My Account</a>
//       <a href="#logout">Log Out</a>
//     </div>
//       </nav>
//     );
//   }
// }

// export default TopNavbar;
