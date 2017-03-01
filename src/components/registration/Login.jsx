import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';
import actions from '../../actions';
import cookie from 'react-cookie';
import axios from 'axios';
import { registerUser } from '../../actions/userActions.js';
import { createStore } from 'redux';
import store from '../../tuberStore';
import types from '../../actionTypes';

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
    this.setState({
      [name]: value
    });
  }

  loginFormSubmit (e) {
    e.preventDefault();
    axios({method: 'post',
           url: 'http://localhost:3000/sessions',
           data: this.state})
      .then(response => {
        console.log('response', response);
        cookie.save('token', response.data.token, { path: '/' });
        cookie.save('user', response.data.email, { path: '/' });
        store.dispatch({ type: types.AUTH_USER });
        window.location.href = home;
      })
      .catch((error) => {
        // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
      });
    }

  render() {
    return (<div className="login-layout row">
              <AppHeader className="z-index3"/>
              <p> {cookie.load('user')} </p>
              <form onSubmit={this.loginFormSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input name="email"  value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
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