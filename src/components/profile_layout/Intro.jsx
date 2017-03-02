import React, { Component } from "react";

export default class Intro extends Component {

  render() {
    const profile = this.props.profile;
    return (
      <div>
        <h1>Hey, I'm {profile.first_name}</h1>
        <h3>
          <i style={{color:profile.status.color}} className="fa fa-circle" aria-hidden="true"></i>
          &nbsp; {profile.status.text} · {profile.city}, {profile.country} · tubering since {profile.joined_date}
        </h3>
        <a href="#0" className="report"><i className="fa fa-flag" aria-hidden></i>
          Report tutor
        </a>
        <blockquote className="quirky">
          {profile.summary}
        </blockquote>
      </div>
    )
  }
}