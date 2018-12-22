import React from 'react';
import './LandingPage.css';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/home" />;
}
  return (
    <div className="landing">
      <div className="welcome-box">
        <h1>[Pet Management Name]</h1>
        <h2>Manage everything pet in one place</h2>
        <button classname="landing-btn">Get Started</button>
        <button classname="landing-btn">Sign In</button>
      </div>
      <section className="feature-area">
        <div className="feature-box">
          <img className="feature-icon" alt="feature icon"/>
          <div className="feature-body">
            <h5 className="feature-title">Build Pet Profiles</h5>
            <p className="feature-details">Build profiles for each one of your fur babies in your family</p>
          </div>
        </div>
        <div className="feature-box">
          <img className="feature-icon" alt="feature icon"/>
          <div className="feature-body">
            <h5 className="feature-title">Store Key Vet Information</h5>
            <p className="feature-details">Never forget when your pet's next vaccination is due with an easy interface to track and remind you of upcoming due dates.</p>
          </div>
        </div>
        <div className="feature-box">
          <img className="feature-icon" alt="feature icon"/>
          <div className="feature-body">
            <h5 className="feature-title">House Pet Sitting Details</h5>
            <p className="feature-details">Tired of always writing out pet sitting instructions every time you go out of town? Keep your instructions in one spot online that can be easily shared with others.</p>
          </div>
        </div>
        <div className="feature-box">
          <img className="feature-icon" alt="feature icon"/>
          <div className="feature-body">
            <h5 className="feature-title">Interact with your Local Pet Community</h5>
            <p className="feature-details">Looking to get involved with great local animal volunteer opportunities or attend upcoming pet events in your neighbor? We got your coverd plus much much more.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

//   render() {
//     return (
//       <section>
//       <header role="banner">
//       <h1>[Pet Management Name]</h1>
//       <h2>manage everything pet in one place</h2>
//       <button >Sign Up!</button>
//       <button >Log In!</button>
//     </header>
//     <section>
//       <header>
//           <h3>Build Pet Profiles</h3>
//       </header>
//       <p>[<em>placeholder for photo]</em>]</p>
//       <p>Build profiles for each one of your fur babies in your family</p>
//     </section>
//     <section>
//       <header>
//           <h3>Store Key Vet Information</h3>
//       </header>
//       <p>[<em>placeholder for screenshot]</em>]</p>
//       <p>Never forget when your pet's next vaccination is due with an easy interface to track and remind you of upcoming due dates.</p>
//     </section>
//      <section>
//       <header>
//           <h3>House Pet Sitting Details</h3>
//       </header>
//       <p>[<em>placeholder for screenshot]</em>]</p>
//       <p>Tired of always writing out pet sitting instructions every time you go out of town? Keep your instructions in one spot online that can be easily shared with others.  </p>
//     </section>
//      <section>
//       <header>
//           <h3>Interact with your Local Pet Community</h3>
//       </header>
//       <p>[<em>placeholder for screenshot]</em>]</p>
//       <p>Looking to get involved with great local animal volunteer opportunities or attend upcoming pet events in your  neighbor? We got your coverd plus much much more. </p>
//     </section>
//     </section>
//     );
//   }
// }


