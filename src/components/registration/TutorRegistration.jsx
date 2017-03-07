import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';
import cookie from 'react-cookie';
import axios from 'axios';
import { registerUser } from '../../actions/userActions.js';
import actions, { profileActions, tutorActions } from '../../actions';
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

class TutorRegistrationLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {student_or_tutor: "tutor",
                  subjects: [],
                  password: '',
                  name: '',
                  city: '',
                  email: '',
                  education: '',
                  experience: '',
                  phone: '',
                  hours: '',
                  rate_cents: '',
                  avatar: 'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/Q-Z/sun-bear-tongue.jpg.adapt.945.1.jpg'};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tutFormSubmit = this.tutFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // Subject select logic
    if (target.type === 'select-multiple') {
      let options = target.options;
      let values = this.state.subjects;
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          const alreadySelectedIndex = values.indexOf(options[i].value);
          if (alreadySelectedIndex > -1) {
            values.splice(alreadySelectedIndex, 1);
          } else {
          values.push(options[i].value);
          }
        }
      }
      this.setState({[name]: values})
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  tutFormSubmit (e) {
    e.preventDefault();
    axios({method: 'post',
           url: 'http://localhost:3000/users',
           data: this.state
    }).then(response => {
        console.log('response', response);
        console.log('token', response.data.user.user.token)
        cookie.save('token', response.data.user.user.token, { path: '/' });
        cookie.save('user', response.data.user, { path: '/' });
        console.log('after cookie save', response.data.user.id)
        store.dispatch(profileActions.loadProfile(response.data.user.id));
        // store.dispatch({ type: types.LOAD_PROFILE });
    }).catch((error) => {
        // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
    });
  }

  render() {
    return (
      <div className="tutor-registration-layout row">
        <AppHeader className="z-index3"/>

      <form onSubmit={this.tutFormSubmit} className="tutor-registration-form">
        <h3>Become a tutor for Tuber!</h3>
        <div className="form-group">
          <label htmlFor="tutorRegEmail">Email address</label>
          <input name="email" value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" id="tutorRegEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegPassword">Password</label>
          <input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" id="tutorRegPassword" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegName">Name</label>
          <input name="name" value={this.state.name} onChange={this.handleInputChange} className="form-control" id="tutorRegName"></input>
        </div>

        <div className="form-group">
          <label htmlFor="tutorRegHours">City</label>
          <select name="city" value={this.state.city} onChange={this.handleInputChange} className="form-control" id="tutorRegCity">
              <option value="Calgary">Calgary</option>
              <option value="Edmonton">Edmonton</option>
              <option value="Hamilton">Hamilton</option>
              <option value="Kitchener">Kitchener</option>
              <option value="Montreal">Montreal</option>
              <option value="Ottawa">Ottawa</option>
              <option value="Quebec City">Quebec City</option>
              <option value="Toronto">Toronto</option>
              <option value="Vancouver">Vancouver</option>
              <option value="Winnipeg">Winnipeg</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegEducation">Summary of your education</label>
          <textarea name="education" value={this.state.education} onChange={this.handleInputChange} className="form-control" id="tutorRegEducation" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tutorFormExperience">Tell students about your tutoring or teaching experience</label>
          <textarea name="experience" value={this.state.experience} onChange={this.handleInputChange} className="form-control" id="tutorFormExperience" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegPhone" className="col-form-label">Phone Number</label>
            <input name="phone" value={this.state.phone} onChange={this.handleInputChange} className="form-control" type="tel" id="tutorRegPhone"/>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegHours">Hours of availability</label>
          <textarea name="hours" value={this.state.hours} onChange={this.handleInputChange} className="form-control" id="tutorRegHours" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegRate">Rate</label>
          <textarea name="rate_cents" value={this.state.rate_cents} onChange={this.handleInputChange} className="form-control" id="tutorRegRate" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegSubjects">Subjects you can teach</label>
          <select name="subjects" value={this.state.subjects} onChange={this.handleInputChange} multiple className="form-control" id="tutorRegSubjects">
            <option value="Visual Arts">Visual Arts</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value="Literature">Literature</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Economics">Economics</option>
            <option value="Law">Law</option>
            <option value="Political science">Political science</option>
            <option value="Psychology">Psychology</option>
            <option value="Sociology">Sociology</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Earth and space sciences">Earth and space sciences</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Computer science">Computer science</option>
            <option value="Engineering">Engineering</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tutRegAvatar">Profile Picture</label>
          <input name="avatar"
                 value={this.state.avatar}
                 onChange={this.handleInputChange}
                 type="string"
                 className="form-control-file"
                 id="tutRegAvatar"
                 aria-describedby="fileHelp"/>
          <small id="fileHelp" className="form-text text-muted"> Enter a URL (defaults to the majestic Sun Bear)</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}

export default TutorRegistrationLayout;