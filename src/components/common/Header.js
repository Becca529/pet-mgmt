import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';
import logo from '../../logo.svg'
import {Link, Redirect} from 'react-router-dom';
import './Header.css';


export class Header extends React.Component {
  logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
      return <Redirect to="/" />;
  }

  render() {
    if (this.props.loggedIn){
        let logOutButton = (
            <button onClick={() => this.logOut()}>Log out</button>
        );
        return (
            <nav role="navigation" className="header-signed-in">
                <img src={logo} className="logo" alt="logo"/>
                {" | "}
                <Link className="link-logo"to="/">Home</Link>
                {" | "}
                {logOutButton}
            </nav>
        );
    }
    else {
        return (
            <nav role="navigation" className="header-signed-out">
                <img src={logo} className="logo" alt="logo"/>
                <Link to="/register" activeclassname="active"className="link-btn">Sign Up</Link>
                {" | "}
                <Link to="/login" activelassname="active" className="link-btn" >Sign In</Link>
            </nav>
        )}
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);


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
