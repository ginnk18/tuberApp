import React, { Component } from 'react';
import store from '../../tuberStore';
import { tutorActions } from '../../actions';

class Nav extends Component {

  render() {
    const handleClick = ()=> store.dispatch(tutorActions.showRegisterTutorForm())
    return (

      <nav className="main-nav">
        <ul>
          <li><a onClick={ handleClick } href= "#0">Become a tutor</a></li>
          <li><a href="#0">Register</a></li>
          <li><a href="#0">Log in</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
