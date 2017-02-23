import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';

class tutorRegistrationLayout extends Component {

  render() {
    return (
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="Education">Summary of your education</label>
    <textarea class="form-control" id="exampleTextarea" rows="1"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleTextarea">Tell students about your tutoring or teaching experience</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="example-tel-input" class="col-form-label">Telephone</label>
    <div class="">
      <input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input">
    </div>
  </div>
  <div class="form-group">
    <label for="Hours">Hours of availability</label>
    <textarea class="form-control" id="hours" rows="1"></textarea>
  </div>
  <div class="form-group">
    <label for="Hours">Rate</label>
    <textarea class="form-control" id="rate" rows="1"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleSelect2">Subjects taught (hold down ctrl or cmd to select multiple)</label>
    <select multiple class="form-control" id="exampleSelect2">
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
  <div class="form-group">
    <label for="exampleTextarea">Example textarea</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputFile">Profile Picture</label>
    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    <small id="fileHelp" class="form-text text-muted">Upload an image for students to view</small>
  </div>
</form>
    )
  }
}

export default SearchResultLayout;