import React, { Component } from 'react';
import store from '../../tuberStore';
import { tutorActions } from '../../actions';
import { studentActions } from '../../actions';
import { userActions } from '../../actions';
import Logo from '../logo/Logo.jsx';
import SearchBox from '../search_box/SearchBox.jsx';
import cookie from 'react-cookie';


const renderTutorReg = ()=> store.dispatch(tutorActions.showRegisterTutorForm())
const renderStudentReg = () => store.dispatch(studentActions.showStudRegForm())
const renderLogin = () => store.dispatch(userActions.showLoginForm())

class Nav extends Component {

  registrationButtons() {
    if (cookie.load('email')){
      return <ul className="nav navbar-nav navbar-right">
               <li><a onClick={ renderStudentReg } href="#0">{cookie.load('email')}}</a></li>
               <li><a onClick={ logout } href= "#0">Logout</a></li>
             </ul>
    } else {
      return <ul className="nav navbar-nav navbar-right">
               <li><a onClick={ this.renderTutorReg } href= "#0">Become a tutor</a></li>
               <li><a onClick={ this.renderStudentReg } href="#0">Sign up</a></li>
               <li><a onClick={ this.renderLogin } href="#0">Log in</a></li>
             </ul>
    }
  }

  render() {
    const renderTutorReg = ()=> store.dispatch(tutorActions.showRegisterTutorForm())
    const renderStudentReg = () => store.dispatch(studentActions.showStudRegForm())
    const renderLogin = () => store.dispatch(userActions.showLoginForm())
    return (
      <nav className="navbar navbar-default main-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" id="logo" href="/">tuber</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" id="tuber-search-form">
              <span className="form-group" id= "tuber-search-form">
                <input type="text" className="form-control" placeholder="Enter a subject"/>
                <button type="submit" className="btn btn-default">Submit</button>
              </span>
            </form>
                if (cookie.load('email')){
                  <ul className="nav navbar-nav navbar-right">
                     <li><a onClick={ renderStudentReg } href="#0">{cookie.load('email')}}</a></li>
                     <li><a onClick={ logout } href= "#0">Logout</a></li>
                   </ul>
                } else {
                  <ul className="nav navbar-nav navbar-right">
                     <li><a onClick={ this.renderTutorReg } href= "#0">Become a tutor</a></li>
                     <li><a onClick={ this.renderStudentReg } href="#0">Sign up</a></li>
                     <li><a onClick={ this.renderLogin } href="#0">Log in</a></li>
                   </ul>
                }
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;