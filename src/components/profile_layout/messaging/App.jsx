require('../styles/App.scss');
require('../styles/Login.scss');

import React from 'react';
import ChatApp from './ChatApp.jsx';
import cookie from "react-cookie";
import actions, { profileActions, studentActions, userActions } from "../../../actions";
import store from "../../../tuberStore.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  firstMessageHandler(event) {
    this.setState({ firstMessage: event.target.value });
  }

  messageSubmitHandler(event) {
    event.preventDefault();
    this.setState({ firstMessage: this.state.firstMessage });
    if (this.props.profile.status.text === "available and online") {
      event.target.reset();

      store.dispatch(profileActions.sendChat({
        receiver_id: this.props.profile.id,
        sender_id: this.state.loggedIn && this.state.loggedIn.id,
        message: this.state.firstMessage,
        username: this.state.loggedIn.name,
        cable: this.props.cable
      }));

    } else {
      event.target.reset();
      console.log("im gonna reset the form and send sms")
      store.dispatch(profileActions.sendSMS({
        to: '+14877071825',
        body: `Tuber Message from ${cookie.load("user").name}:\n
        ${this.state.firstMessage}`
      }))
    }
  }

  decidesButton() {
    if (this.props.profile.status.text === "available and online") {
      return <input type="submit" value="Send Message" />
    } else {
      return <input type="submit" value="Send Offiline Message" />
    }
  }

  showErrorIfError() {
    if (this.props.profile.offlineError) {
      this.props.profile.offlineError = null;
      return (<div className="alert alert-danger fade in">
                <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
               <strong>Aw!</strong> We could not get that done. ):
              </div>)
    }
  }

  render() {

    this.state.loggedIn = cookie.load("user");
    if (this.props.profile.chatSent) {
      // Set username from the loggedIn user
      this.state.username = this.state.loggedIn.email
      // User logged in or Form was submitted, now show the main App
      return (<div>
        <h3><em>Chat in progress</em></h3>
        
      </div>);
    }

    if (this.props.profile.offlineSent) {
      return <h3><em>Offline SMS sent</em></h3>
    }
    // Initial page load, show a simple login form
    if (this.state.loggedIn) {
      return (<div>
        {this.showErrorIfError()}
        <form onSubmit={(e) => this.messageSubmitHandler(e)} className="username-container">
          <h1>Tuber Messenger</h1>
          <div>
            <input
              type="text"
              onChange={(e) => this.firstMessageHandler(e)}
              placeholder="Initiate conversation with me"
              required />
          </div>
          {this.decidesButton()}
        </form>
      </div>);
    }
    // Not logged in, buttons to register
    return (
      <div className="not-loggedin">
        <a href="#0" onClick={() => store.dispatch(studentActions.showStudRegForm())}><div className="register">Register</div></a>
        <p>Have an account? <a href="#0" onClick={() => store.dispatch(userActions.showLoginForm())} className="login">Login</a></p>
      </div>
    )
  }

}
App.defaultProps = {
};

export default App;
