import React, { Component } from 'react';
import store from '../../tuberStore';
import { tutorActions } from '../../actions';
import { studentActions } from '../../actions';
import { userActions } from '../../actions';
import Logo from '../logo/Logo.jsx';
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
    if (cookie.load('user')){
      return <ul className="">
               <li><a href="#0">{cookie.load('user').email}</a></li>
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
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
          { this.registrationButtons() }
          </div>
        </div>
      </nav>
      <nav className="mobile-nav">
        <div className="line"></div>
        <div className="line" id="menuline">
          <ul className="menu">
            <li><a onClick={ this.renderTutorReg } href= "#0">Become a tutor</a></li>
            <li><a onClick={ this.renderStudentReg } href="#0">Sign up</a></li>
            <li><a onClick={ this.renderLogin } href="#0">Log in</a></li>
          </ul>
        </div>
        <div className="line"></div>
      </nav>
    </div>
    )
  }
}

export default Nav;
