import React, {Component} from 'react';
import HomeLayout from './components/home_layout/HomeLayout2.jsx';
import ProfileLayout from './components/profile_layout/ProfileLayout.jsx';
import SearchResultLayout from './components/search_result_layout/SearchResultLayout.jsx';
import TutorRegistrationLayout from './components/registration/TutorRegistration.jsx';
import StudentRegistrationLayout from './components/registration/StudentRegistration.jsx';
import LoginLayout from './components/registration/Login.jsx';


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
      "register_student": <StudentRegistrationLayout />,
      "search_result": <SearchResultLayout tutors={this.props.appState.tutors} subject={this.props.appState.subject}/>,
      "login": <LoginLayout />
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
