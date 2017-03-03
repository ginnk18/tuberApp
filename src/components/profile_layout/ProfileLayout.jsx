import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
      <div className="profile-layout rowx">
        <AppHeader className="z-index3"/>

        <section className="main-content">
          <section className="row rowx">
            <aside className="profile-summaries one-third">
              <img src={this.props.profile.avatar} />
            </aside>
            <div className="intro profile-details two-third">
              <Intro profile={this.props.profile}/>
            </div>
          </section>

          <section className="row rowx">
            <aside className="profile-summaries one-third">
              <About profile={this.props.profile}/>
            </aside>
            <div className="profile-details two-third tab-area" >
              <Tabs>
                <TabList>
                  <Tab>Reviews</Tab>
                  <Tab>Availability</Tab>
                  <Tab>Messages</Tab>
                </TabList>
                <TabPanel>
                  <Reviews reviews={this.props.profile.reviews}/>
                </TabPanel>
                <TabPanel>
                  <Availability availability={this.props.profile.availability}/>
                </TabPanel>
                <TabPanel>
                  <Messages conversations={this.props.profile.conversations}/>
                </TabPanel>
              </Tabs>
            </div>
          </section>
        </section>
      </div>
    )} return null
  }
}

export default ProfileLayout;