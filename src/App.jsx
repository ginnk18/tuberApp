import React, { Component } from "react";
// import Content from "./components/content/Content.jsx";
import HomeLayout from "./components/home_layout/HomeLayout.jsx";
import ProfileLayout from "./components/profile_layout/ProfileLayout.jsx";
import SearchResultLayout from "./components/search_result_layout/SearchResultLayout.jsx";
import TutorRegistrationLayout from "./components/registration/TutorRegistration.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.pages = this.pages.bind(this)
  }

  pages() {
    return {
      "home": <HomeLayout tutors={this.props.appState.tutors} />,
      "profile": <ProfileLayout profile={this.props.appState.profile} />,
      "register_tutor": <TutorRegistrationLayout />,
      "search_result": <SearchResultLayout />
    };
  }

  render() {
    if (this.props.appState) {
      return (<div>
                {this.pages()[this.props.appState.page]}
              </div>
      );
    } return null;
  }
}
export default App;
