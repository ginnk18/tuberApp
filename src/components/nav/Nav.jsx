import React, { Component } from 'react';
import store from '../../tuberStore';
import { tutorActions, profileActions } from '../../actions';
import { studentActions, userActions } from '../../actions';
// import { userActions } from '../../actions';
import Logo from '../logo/Logo.jsx';
import MNav from '../header_dropdown/mobileNav.jsx'
import SearchBox from '../search_box/SearchBox.jsx';
import cookie from 'react-cookie';
import axios from 'axios';
import types from '../../actions/actionTypes';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {student_or_tutor: "student",
                  email: ' ',
                  password: '',
                  search_term: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  renderTutorReg () { store.dispatch(tutorActions.showRegisterTutorForm()) }
  renderStudentReg () { store.dispatch(studentActions.showStudRegForm()) }
  renderLogin () { store.dispatch(userActions.showLoginForm()) }

  registrationButtons() {
    const loggedIn = cookie.load('user');
    if (loggedIn){
      return <ul className="">
               <li><a onClick={() => store.dispatch(profileActions.loadProfile(loggedIn.id)) } href="#0">{loggedIn.email}</a></li>
               <li><a onClick={ this.logout } href= "#0">Logout</a></li>
             </ul>
    } else {
      return <ul className="">
               <li><a onClick={ this.renderTutorReg } href= "#0">Become a tutor</a></li>
               <li><a onClick={ this.renderStudentReg } href="#0">Sign up</a></li>
               <li><a onClick={ this.renderLogin } href="#0">Log in</a></li>
             </ul>
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  logout(e) {
    e.preventDefault();
    axios({method: 'delete',
           url: `http://localhost:3000/sessions/${cookie.load('token')}`
         })
      .then(response => {
        console.log('response', response);
        cookie.remove('token');
        cookie.remove('user');
        store.dispatch({ type: types.UNAUTH_USER });
      })
      .catch((error) => {
        // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
      });
  };

  render() {
    return (
    <div>
      <nav className="main-nav">
        <div className="container-fluid collapse">
          <div className="">
          { this.registrationButtons() }
          </div>
        </div>
      </nav>
      <MNav />
      {/*<nav className="mobile-nav">
        <div className="line"></div>
        <div className="line" id="menuline">
          <ul className="menu">
{ this.registrationButtons() }
          </ul>
        </div>
        <div className="line"></div>
      </nav>*/}
    </div>
    )
  }
}

export default Nav;
