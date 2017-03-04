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
    // this.subjectSearch = this.subjectSearch.bind(this);
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

  // subjectSearch(e) {
  //   e.preventDefault();
  //   console.log('search_term', this.state);
  //   axios({method: 'get',
  //          url: `http://localhost:3000/tutors/search/:${this.state.search_term}`,
  //          data: this.state
  //        })
  //     .then(response => {
  //       console.log('response', response);
  //       store.dispatch({ type: types.SEARCH, payload: response.data });
  //     })
  //     .catch((error) => {
  //       // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
  //     });
  // }

  render() {
    return (
    <div>
      <nav className="main-nav">
        <div className="container-fluid">
            {/*<form onSubmit={this.subjectSearch}
                  className="navbar-form navbar-left"
                  id="tuber-search-form">
              <span className="form-group" id= "tuber-search-form" >
                <input name="search_term"
                       type="text"
                       className="form-control"
                       placeholder="Enter a subject"
                       value={this.state.search_term}
                       onChange={this.handleInputChange}/>
                <button type="submit" className="btn btn-default">Submit</button>
              </span>
            </form>*/}
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
