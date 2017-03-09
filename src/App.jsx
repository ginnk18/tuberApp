import { ActionCable, Cable } from 'action-cable-react';
import { CableMixin, ChannelMixin } from 'action-cable-react';
import React, {Component} from 'react';
import HomeLayout from './components/home_layout/HomeLayout2.jsx';
import ProfileLayout from './components/profile_layout/ProfileLayout.jsx';
import SearchResultLayout from './components/search_result_layout/SearchResultLayout.jsx';
import TutorRegistrationLayout from './components/registration/TutorRegistration.jsx';
import StudentRegistrationLayout from './components/registration/StudentRegistration.jsx';
import LoginLayout from './components/registration/Login.jsx';
import store from './tuberStore';
import actions, { profileActions, tutorActions } from './actions';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.pages = this.pages.bind(this)
//   }
module.exports = React.createClass({
  // mixins: [CableMixin(React), ChannelMixin('NotificationChannel')],

  getInitialState() {

    return {}
  },

  // handleConnected() {
  //   console.log('Connected! in App')
  // },

  // handleDisconnected() {
  //   console.log('Disconnected! in App')
  // },

  // handleNewNotification(data) {
  //   console.log('notify message: ' + data);
  //   store.dispatch(profileActions.newNotify(data));
  //   // this.addMessage(data);
  // },

  // addMessage(message) {
  //   // Append the message to the component state
  //   this.props.cable.messages.push(message);
  // },

  pages() {
    return {
      "home": <HomeLayout tutors={this.props.appState.tutors} />,
      "profile": <ProfileLayout cable={this.props.cable} profile={this.props.appState.profile} page="profile" />,
      "register_tutor": <TutorRegistrationLayout />,
      "register_student": <StudentRegistrationLayout />,
      "search_result": <SearchResultLayout tutors={this.props.appState.tutors} subject={this.props.appState.subject}/>,
      "login": <LoginLayout />
    };
  },

  render() {
    if (this.props.appState) {
      return (<div>
                {this.pages()[this.props.appState.page]}
              </div>
      );
    } return null;
  }
});
// export default App;
