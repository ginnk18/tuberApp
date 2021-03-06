import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';
import actions, { profileActions, tutorActions } from '../../actions';
import cookie from 'react-cookie';
import axios from 'axios';
import { registerUser } from '../../actions/userActions.js';
import { createStore } from 'redux';
import store from '../../tuberStore';
import types from '../../actions/actionTypes';

const errorHandler = function(dispatch, error, type) {
  let errorMessage = '';

  if(error.data.error) {
    errorMessage = error.data.error;
  } else if(error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

class StudentRegistrationLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {student_or_tutor: "student",
                  email: ' ',
                  password: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.studFormSubmit = this.studFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  studFormSubmit (e) {
    e.preventDefault();
    axios({method: 'post',
           url: 'http://localhost:3000/users',
           data: this.state})
      .then(response => {
        console.log('response', response);
        cookie.save('token', response.data.user.user.token, { path: '/' });
        cookie.save('user', response.data.user, { path: '/' });
        // load home 
        return store.dispatch(tutorActions.subscribeThenHome(cookie.load("user")));;
      })
      .catch((error) => {
        // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
      });
    }

  renderAlert() {
    if(this.state.error) {
      return (
        <div>
          <span><strong>Error!</strong> {this.state.error}</span>
        </div>
      );
    }
  }

  render() {
    return (<div className="student-registration-layout row">
              <AppHeader className="z-index3"/>
              { this.renderAlert() }
              <p> {cookie.load('email')} </p>
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <form onSubmit={this.studFormSubmit} className="student-registration-form">
                <h3> Sign up for tuber! </h3>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input name="email"
                         value={this.state.email}
                         onChange={this.handleInputChange}
                         type="email"
                         className="form-control"
                         aria-describedby="emailHelp"
                         placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input name="password"
                         value={this.state.password}
                         onChange={this.handleInputChange}
                         type="password" className="form-control"
                         placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary reg-submit">Submit</button>
              </form>
              </div>
            </div>
    )
  }
}

export default StudentRegistrationLayout;