import React, { Component } from "react";

export default class About extends Component {

  render() {
    return (
      <section className="about">
        <h2>About Me</h2>
        <dl className="profile-summary">
          <dt>Contact</dt>
          <dd>Email: <span>{this.props.profile.email}</span></dd>
          <dd>Phone: <span>{this.props.profile.phone}</span></dd>
          <dd>Address: <span>{this.props.profile.address} {this.props.profile.city}, {this.props.profile.country}</span></dd>

          <dt>Qualification</dt>
          <dd>{this.props.profile.education}</dd>

          <dt>Experience</dt>
          <dd>{this.props.profile.experience}</dd>

          <dt>Subjects Expertise</dt>
          <dd>{this.props.profile.subjects.map(s => <span key={s}>{s} · </span>)}</dd>

          <dt>Rate</dt>
          <dd>{this.props.profile.rate}</dd>
        </dl>
      </section>
    )
  }
}