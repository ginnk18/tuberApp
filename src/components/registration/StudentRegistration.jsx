import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';

class StudentRegistrationLayout extends Component {

  render() {
    return (
      <form action="/users/create" method = "POST">
        Name
        <input type="text" name="name">
        <br>
        Email
        <input type="text" name="email">
        <br>
        Password
        <input type="text" name="password">
        <br>
        <input type="submit" value="Submit">
      </form>
    )
  }
}

export default StudentRegistrationLayout;