require('../styles/ChatApp.scss');

import { CableMixin, ChannelMixin } from 'action-cable-react';
import React from 'react';
import cookie from 'react-cookie';

import Messages from './Messages.jsx';
import ChatInput from './ChatInput.jsx';

// class ChatApp extends React.Component {
  // socket = {};
  // constructor(props) {
  //   super(props);
  //   this.state = { messages: [] };
  //   this.sendHandler = this.sendHandler.bind(this);
    
  //   // Connect to the server
  //   this.socket = io('http://localhost:4008', { query: `username=${props.username}` }).connect();

  //   // Listen for messages from the server
  //   this.socket.on('server:message', message => {
  //     this.addMessage(message);
  //   });
  // }
module.exports = React.createClass({
  mixins: [CableMixin(React), ChannelMixin('ChatChannel')],

  getInitialState() {
    this.props.cable.channels.ChatChannel.identifier = JSON.stringify({
      channel: 'ChatChannel',
      sender_id: cookie.load("user") && cookie.load("user").id,
      receiver_id: this.props.profile && this.props.profile.id
    });
    // this.props.cable.channels.NotificationChannel.received = this.addMessage.bind(this)
    console.log(this.props.cable)
    return {
      messages: []
    }
  },

  handleConnected() {
    console.log('Connected! in chatApp')
    console.log(this.props.cable)
  },

  handleDisconnected() {
    console.log('Disconnected! in chatApp')
  },

  handleNewMessage(data) {
    console.log('New message: ' + data.message);
    // this.addMessage(data);
  },

  handleSend(message) {
    const user = cookie.load("user")
    const messageObject = {
      receiver_id: this.props.profile.id,
      sender_id: user.id,
      timestamp: Date.now(),
      username: user.name,
      message
    };

    this.perform('ChatChannel', 'newMessage', messageObject);
    this.props.cable.channels.NotificationChannel.perform("newNotification", messageObject);
  

  },

  minimize(e) {
    jQuery("#chat-app").toggleClass("minimize");
    // jQuery("#messageList").slideToggle();
  },

  render() {
    if (this.props.cable.messages.length > 0) {
      return (
        <div id="chat-app" className="container">
          <h3 className="header" onClick={(e) => this.minimize(e)}>Tuber Messenger</h3>
          <Messages messages={this.props.cable.messages} />
          <ChatInput onSend={(m) => this.handleSend(m)} />
        </div>
      );
    } return null;
  }

});
// ChatApp.defaultProps = {
//   username: 'Anonymous'
// };

// export default ChatApp;
