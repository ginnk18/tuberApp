import React, { Component } from 'react';
import store from '../../tutorStore';
import actions from '../../actions';

class Nav extends Component {

  render() {
    return <nav className="main-nav">
            <ul>
              <li><a onClick={()=> store.dispatch(actions.showRegisterTutorForm())} href= "#0">Become a tutor</a></li>
              <li><a href="#0">Register</a></li>
              <li><a href="#0">Log in</a></li>
            </ul>
           </nav>
  }
}

export default Nav;