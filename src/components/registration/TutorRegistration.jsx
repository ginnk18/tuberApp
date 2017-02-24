import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';
import store from '../../tuberStore';
import actions from '../../actions';

class TutorRegistrationLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault;
    console.log(e);
    store.dispatch(actions.registerTutor(e));

    fetch('http://0.0.0.0:3000/tutors', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
  }

  render() {
    return (
      <div className="tutor-registration-layout row">
        <AppHeader className="z-index3"/>

      <form onSubmit={this.formSubmit} className="tutor-registration-form">
        <div className="form-group">
          <label htmlFor="tutorRegEmail">Email address</label>
          <input type="email" className="form-control" id="tutorRegEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="tutorRegPassword">Password</label>
          <input type="password" className="form-control" id="tutorRegPassword" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label htmlFor="education">Summary of your education</label>
          <textarea className="form-control" id="exampleTextarea" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="experience">Tell students about your tutoring or teaching experience</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="col-form-label">Telephone</label>
          <div className="">
            <input className="form-control" type="tel" id="example-tel-input"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Hours">Hours of availability</label>
          <textarea className="form-control" id="hours" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="Hours">Rate</label>
          <textarea className="form-control" id="rate" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect2">Subjects taught (hold down ctrl or cmd to select multiple)</label>
          <select multiple className="form-control" id="exampleSelect2">
            <option>Visual Arts</option>
            <option>Geography</option>
            <option>History</option>
            <option>Literature</option>
            <option>Philosophy</option>
            <option>Economics</option>
            <option>Law</option>
            <option>Political science</option>
            <option>Psychology</option>
            <option>Sociology</option>
            <option>Biology</option>
            <option>Chemistry</option>
            <option>Earth and space sciences</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Agriculture</option>
            <option>Computer science</option>
            <option>Engineering</option>
            <option>Medicine</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleTextarea">Example textarea</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Profile Picture</label>
          <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
          <small id="fileHelp" className="form-text text-muted">Upload an image for students to view</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}

export default TutorRegistrationLayout;