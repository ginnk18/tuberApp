import React, { Component } from "react";
import AppHeader from "../app_header/AppHeader.jsx";
import Intro from "./Intro.jsx"
import About from "./About.jsx"
import Reviews from "./Reviews.jsx"
import Availability from "./Availability.jsx"
import Messages from "./Messages.jsx"

class ProfileLayout extends Component {

  render() {
    return (
      <div className="profile-layout row">
        <AppHeader className="z-index3"/>

        <section className="main-content">
          <section className="row">
            <aside className="profile-summaries one-third">
              <img src="http://placehold.it/1580" />
            </aside>
            <div className="intro profile-details two-third">
              <Intro />
            </div>
          </section>

          <section className="row">
            <aside className="profile-summaries one-third">
              <About />
            </aside>
            <div className="profile-details two-third tab-area" >
              <div className="tabs-buttons-wrapper">
                <a className="active" href="#0" data-id="reviews">Reviews</a>
                <a href="#0" data-id="availability">Availability</a>
                <a href="#0" data-id="messages">Messages</a>
              </div>
              <Reviews />
              <Availability />
              <Messages />
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default ProfileLayout;