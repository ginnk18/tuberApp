import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';
import store from '../../tutorStore';
import actions from '../../actions';

class TutorRegistrationLayout extends Component {

  formSubmit(e) {
    e.preventDefault;
    console.log(e);
    store.dispatch(actions.registerTutor(e));
  }

  render() {
    return (
      <div className="tutor-registration-layout row">
        <AppHeader className="z-index3"/>

      <form onSubmit={this.formSubmit} className="tutor-registration-form">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group">
          <label for="Education">Summary of your education</label>
          <textarea className="form-control" id="exampleTextarea" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleTextarea">Tell students about your tutoring or teaching experience</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label for="example-tel-input" className="col-form-label">Telephone</label>
          <div className="">
            <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input"/>
          </div>
        </div>
        <div className="form-group">
          <label for="Hours">Hours of availability</label>
          <textarea className="form-control" id="hours" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label for="Hours">Rate</label>
          <textarea className="form-control" id="rate" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleSelect2">Subjects taught (hold down ctrl or cmd to select multiple)</label>
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
          <label for="exampleTextarea">Example textarea</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleInputFile">Profile Picture</label>
          <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
          <small id="fileHelp" className="form-text text-muted">Upload an image for students to view</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}

export default TutorRegistrationLayout;