import React, { Component } from 'react';
import store from '../../tuberStore';
import { tutorActions } from '../../actions';

class Nav extends Component {

  render() {
    const handleClick = ()=> store.dispatch(tutorActions.showRegisterTutorForm())
    return (
<div>
      <nav className="main-nav">
        <ul>
          <li><a onClick={ handleClick } href= "#0">Become a tutor</a></li>
          <li><a href="#0">Register</a></li>
          <li><a href="#0">Log in</a></li>
        </ul>
      </nav>
      <nav className="mobile-nav">
      <div className="line"></div>
      <div className="line" id="menuline">
      <ul className="menu">
      <li><a onClick={ handleClick } href= "#0">Become a tutor!</a></li>
      <li><p>Register</p></li>
      <li><p>Log in</p></li>
      </ul>
      </div>
      <div className="line"></div>
      </nav>
      </div>
    )
  }
}

export default Nav;
