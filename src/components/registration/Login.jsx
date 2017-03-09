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

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {student_or_tutor: "student",
                  email: '',
                  password: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.loginFormSubmit = this.loginFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  loginFormSubmit (e) {
    console.log('in login form submit')
    e.preventDefault();
    if (navigator.geolocation) {
      console.log('in geolocation if')
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('in geolocation get current')
        axios({method: 'post',
             url: 'http://localhost:3000/sessions',
             data: {email: this.state.email,
                    password: this.state.password,
                    lat: position.coords.latitude,
                    long: position.coords.longitude}
             })
        .then(response => {
          console.log('response', response.data);
          cookie.save('token', response.data.user.token, { path: '/' });
          cookie.save('user', response.data, { path: '/' });

        // load home
        console.log("before load home")
        return store.dispatch(tutorActions.subscribeThenHome(cookie.load("user")));
        })
        .catch((error) => {
          // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
        })
      })
    }
  }

  render() {
    return (<div className="login-layout row">
              <AppHeader className="z-index3"/>
              {/*<p> {cookie.load('user').email} </p>*/}
              <form onSubmit={this.loginFormSubmit} className="login-form">
              <h3> Log in </h3>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input name="email"
                         value={this.state.email}
                         onChange={this.handleInputChange}
                         type="email" className="form-control"
                         aria-describedby="emailHelp"
                         placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input name="password"  value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
    )
  }
}

export default LoginLayout;