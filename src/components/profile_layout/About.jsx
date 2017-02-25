import React, { Component } from "react";

export default class About extends Component {

  render() {
    return (
      <section className="about">
        <h2>About Me</h2>
        <dl className="profile-summary">
          <dt>Contact</dt>
          <dd>Email: <span>mightytutor@tubers.ca</span></dd>
          <dd>Phone: <span>403-5862-1452</span></dd>
          <dd>Address: <span>119 14th Avenue, Calgary NW, AB, Canada</span></dd>

          <dt>Qualification</dt>
          <dd>Some dodgy Phd in philosophy from UofC..in ur phase:P</dd>

          <dt>Experience</dt>
          <dd>40 years experience lazing around and playing PES</dd>
        </dl>
      </section>
    )
  }
}