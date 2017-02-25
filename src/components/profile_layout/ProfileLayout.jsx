import React, { Component } from "react";
import AppHeader from "../app_header/AppHeader.jsx";
import Intro from "./Intro.jsx"
import About from "./About.jsx"
import Reviews from "./Reviews.jsx"
import Availability from "./Availability.jsx"
import Messages from "./Messages.jsx"

class ProfileLayout extends Component {

  render() {
    if (this.props.profile) {
    return (
      <div className="profile-layout row">
        <AppHeader className="z-index3"/>

        <section className="main-content">
          <section className="row">
            <aside className="profile-summaries one-third">
              <img src={this.props.profile.avatar} />
            </aside>
            <div className="intro profile-details two-third">
              <Intro profile={this.props.profile}/>
            </div>
          </section>

          <section className="row">
            <aside className="profile-summaries one-third">
              <About profile={this.props.profile}/>
            </aside>
            <div className="profile-details two-third tab-area" >
              <div className="tabs-buttons-wrapper">
                <a className="active" href="#0" data-id="reviews">Reviews</a>
                <a href="#0" data-id="availability">Availability</a>
                <a href="#0" data-id="messages">Messages</a>
              </div>
              <Reviews reviews={this.props.profile.reviews}/>
              <Availability availability={this.props.profile.availability}/>
              <Messages conversations={this.props.profile.conversations}/>
            </div>
          </section>
        </section>
      </div>
    )} return null
  }
}

export default ProfileLayout;