import React, { Component } from 'react';
import store from '../../tutorStore';
import { showRegisterTutorForm } from '../../actions';

class Nav extends Component {

  render() {
    return <nav className="main-nav">
            <ul>
              <li><a onClick={()=> store.dispatch({type: "REGISTER_TUTOR", payload: { page: "register_tutor" }})} href= "#0">Become a tutor</a></li>
              <li><a href="#0">Register</a></li>
              <li><a href="#0">Log in</a></li>
            </ul>
           </nav>
  }
}

export default Nav;