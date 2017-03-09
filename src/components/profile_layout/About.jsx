import React, { Component } from "react";
import AboutEditable from "./AboutEditable.jsx";
import { profileActions } from "../../actions";
import store from "../../tuberStore.js";
import cookie from "react-cookie";

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  showEditable(e) {
    this.setState({editable: true});
    console.log(this.state.editable)
  }

  update(data) {
    this.setState({editable: false});
    data.id = this.props.profile.id;
    store.dispatch(profileActions.updateProfile(data))
    console.log(this.state.editable)
    console.log("Im gonna update", this)
    console.log("data", data)
  }

  showEditButton(loggedIn) {
    if (loggedIn && (loggedIn.id === this.props.profile.id)) {
      return <i onClick={(e) => this.showEditable(e)} className="fa fa-edit"></i>
    }
  }

  showAboutInfo(loggedIn, profile) {
    console.log('in show about info')
    if (loggedIn) {
      console.log('in logged in')
      return <div>
               <dt>Contact</dt>
               <dd>Email: <span>{profile.email}</span></dd>
               <dd>Phone: <span>{profile.phone}</span></dd>
               <dd>Address: <span>{profile.address} {profile.city}, {profile.country}</span></dd>
             </div>
    } else {
      return <div>
               <dt>Please register to see contact details</dt>
             </div>
    }
  }

  render() {
    const profile = this.props.profile;
    const loggedIn = cookie.load("user");
    if (loggedIn && (loggedIn.id === profile.id) && this.state.editable) {
      return <AboutEditable
              update={(data) => this.update(data)}
              profile={profile} />
    }

    return (
      <section className="about">
        <h2 className="head-wrapper">About Me
          {this.showEditButton(loggedIn)}
        </h2>
        <dl className="profile-summary">

          {this.showAboutInfo(loggedIn, profile)}
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