import React, { Component } from "react";

export default class About extends Component {

  render() {
    const profile = this.props.profile;
    return (
      <section className="about">
        <h2>About Me</h2>
        <dl className="profile-summary">
          <dt>Contact</dt>
          <dd>Email: <span>{profile.email}</span></dd>
          <dd>Phone: <span>{profile.phone}</span></dd>
          <dd>Address: <span>{profile.address} {profile.city}, {profile.country}</span></dd>

          <dt>Qualification</dt>
          <dd>{profile.education}</dd>

          <dt>Experience</dt>
          <dd>{profile.experience}</dd>

          <dt>Subjects Expertise</dt>
          <dd>{profile.subjects.map(s => <span key={s}>{s} · </span>)}</dd>

          <dt>Rate</dt>
          <dd>{profile.rate}</dd>
        </dl>
      </section>
    )
  }
}