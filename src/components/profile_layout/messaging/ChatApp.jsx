require('../styles/ChatApp.scss');

import { CableMixin, ChannelMixin } from 'action-cable-react';
import React, {Component} from 'react';
import cookie from 'react-cookie';

import Messages from './Messages.jsx';
import ChatInput from './ChatInput.jsx';
import store from '../../../tuberStore.js';
import { profileActions } from '../../../actions';

// module.exports = React.createClass({
//   // mixins: [CableMixin(React), ChannelMixin('NotificationChannel')],

//   getInitialState() {
//     // this.props.cable.channels.ChatChannel.identifier = JSON.stringify({
//     //   channel: 'ChatChannel',
//     //   sender_id: cookie.load("user") && cookie.load("user").id,
//     //   receiver_id: this.props.profile && this.props.profile.id
//     // });
//     // this.props.cable.channels.NotificationChannel.received = this.handleNewNotification.bind(this)
//     return {
//       messages: []
//     }
//   },

export default class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = { bound: false};
    console.log("in chat app constructor",Object.keys(this.props.cable.channels))
  }

  handleConnected() {
    console.log('Connected to Notification! in chatApp')
    console.log(this.props.cable)
  }

  handleDisconnected() {
    console.log('Disconnected! in chatApp')
  }

  handleNewNotification(data) {
    console.log('New message: ' + data.message);
    store.dispatch(profileActions.newNotify(data));
  }

  handleSend(message, chatID) {
    const user = cookie.load("user")
    console.log(chatID)
    const messageObject = {
      receiver_id: chatID || this.props.profile.id,
      sender_id: user.id,
      timestamp: Date.now(),
      username: user.email,
      message
    };

    // this.perform('ChatChannel', 'newNotification', messageObject);
    this.props.cable.channels.NotificationChannel.perform("newNotification", messageObject);
  console.log(messageObject)

  }

  minimize(e) {
    jQuery(".chat-app").toggleClass("minimize");
    // jQuery("#messageList").slideToggle();
  }

  renderChatWindows(chatws) {
    for (let chatID in chatws) {
      console.log("Chat ID ",chatID, " ChatWS ", chatws)
      if (chatws.hasOwnProperty(chatID)) {
        return (
          <div className="chat-app container">
            <h3 className="header" onClick={(e) => this.minimize(e)}>{chatID}Tuber Messenger</h3>
            <Messages messages={chatws[chatID]} />
            <ChatInput onSend={(m) => this.handleSend(m, chatID)} />
          </div>
        );
      }
    }
  }

  render() {
    console.log("in chat app render",this.props.cable.channels)
    if (this.props.cable.channels.NotificationChannel && !this.state.bound) {
      this.props.cable.channels.NotificationChannel.received = this.handleNewNotification.bind(this);
      this.setState({...this.state, bound: true});
    }
    // console.log(this.props.cable.messages)
    return (
      <div>
      {this.renderChatWindows(this.props.cable.messages)}
      </div>
    )
  }

};
