import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';

class StudentRegistrationLayout extends Component {

  render() {
    return (<div className="tutor-registration-layout row">
              <AppHeader className="z-index3"/>
              <form onSubmit={this.formSubmit} className="student-registration-form">
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group">
                  <label htmlFor="Education">Summary of your education</label>
                  <textarea className="form-control" id="exampleTextarea" rows="1"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

    )
  }
}

export default StudentRegistrationLayout;