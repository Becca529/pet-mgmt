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
                 <ul className="topnav nav-signed-in" role="navigation">
                     <li><i className="fas fa-paw"><Link className="link-logo"to="/">Home</Link></i></li>
                     <li><Link className="link-logo"to="/">HOME</Link></li>
                     <li><i className="fa fa-user-circle-o">MY ACCOUNT</i></li>
                     <li>{logOutButton}</li>
                 </ul>
        );
    }
    else {
        return (
            <ul className="topnav nav-signed-in" role="navigation">
                <li><Link className="home"to="/"><i className="fas fa-paw home"></i>Home</Link></li>
                <li><button><Link to="/register" activeclassname="active"className="link-btn">SIGN UP</Link></button></li>
                <li><button><Link to="/login" activelassname="active" className="link-btn" >SIGN IN</Link></button></li>
            </ul>
        )}
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);

