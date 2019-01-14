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
            <button className="link-btn" onClick={() => this.logOut()}>Log out</button>
        );
        return (
                 <ul className="topnav nav-signed-in" role="navigation">
                    <li className="home"><Link to="/home"><i className="fas fa-paw fa-lg"></i></Link></li>
                     <li><i className="fas fa-user-circle fa-lg"></i>MY ACCOUNT</li>
                     <li>{logOutButton}</li>
                 </ul>
        );
    }
    else {
        return (
            <ul className="topnav nav-signed-in" role="navigation">
                <li className="home"><Link to="/"><i className="fas fa-paw fa-lg"></i></Link></li>
                <li><button><Link to="/register" className="link-btn right-nav">SIGN UP</Link></button></li>
                <li><button><Link to="/login" className="link-btn right-nav" >SIGN IN</Link></button></li>
            </ul>
        )}
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);

