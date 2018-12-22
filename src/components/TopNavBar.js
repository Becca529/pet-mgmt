import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './TopNavBar.css';


export class TopNavBar extends React.Component {
  logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
  }

  render() {
      // Only render the my account, log out button if we are logged in
      let logOutButton;
      if (this.props.loggedIn) {
          logOutButton = (
              <button onClick={() => this.logOut()}>Log out</button>
          );
      }
      return (
          <div className="top-nav-bar">
              <h1>Pet Management</h1>
              {logOutButton}
          </div>
      );
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
