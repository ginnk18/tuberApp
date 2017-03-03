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
  renderTutorReg () { store.dispatch(tutorActions.showRegisterTutorForm()) }
  renderStudentReg () { store.dispatch(studentActions.showStudRegForm()) }
  renderLogin () { store.dispatch(userActions.showLoginForm()) }

  registrationButtons() {
    if (cookie.load('email')){
      return <ul className="">
               <li><a href="#0">{cookie.load('email')}</a></li>
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

  logout(e) {
    e.preventDefault();
    axios({method: 'delete',
           url: `http://localhost:3000/sessions/:${cookie.load('token')}`
         })
      .then(response => {
        console.log('response', response);
        cookie.remove('token')
        cookie.remove('email')
        store.dispatch({ type: types.AUTH_USER });
        window.location.href = home;
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
            {/*<form className="navbar-form navbar-left" id="tuber-search-form">
                          <span className="form-group" id= "tuber-search-form">
                            <input type="text" className="form-control" placeholder="Enter a subject"/>
                            <button type="submit" className="btn btn-default">Submit</button>
                          </span>
                        </form>*/}
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
