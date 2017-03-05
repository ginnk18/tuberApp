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
    const profile = this.props.profile;
    if (profile) {
    return (
      <div className="profile-layout rowx">
        <AppHeader className="z-index3"/>

        <section className="main-content">
          <section className="row rowx">
            <aside className="profile-summaries one-third">
              <img src={profile.avatar} />
            </aside>
            <div className="intro profile-details two-third">
              <Intro profile={profile}/>
            </div>
          </section>

          <section className="row rowx">
            <aside className="profile-summaries one-third">
              <About profile={profile}/>
            </aside>
            <div className="profile-details two-third tab-area" >
              <Tabs selectedIndex={1}>
                <TabList>
                  <Tab>Reviews</Tab>
                  <Tab>Availability</Tab>
                  <Tab>Messages</Tab>
                </TabList>
                <TabPanel>
                  <Reviews reviews={profile.reviews} profileID={profile.id} />
                </TabPanel>
                <TabPanel>
                  <Availability availability={profile.availability}/>
                </TabPanel>
                <TabPanel>
                  <Messages conversations={profile.conversations}/>
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