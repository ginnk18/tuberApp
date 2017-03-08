require('../styles/ChatApp.scss');

import { CableMixin, ChannelMixin } from 'action-cable-react';
import React from 'react';
import cookie from 'react-cookie';

import Messages from './Messages.jsx';
import ChatInput from './ChatInput.jsx';

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

    this.perform('ChatChannel', 'newMessage', messageObject);
    this.props.cable.channels.NotificationChannel.perform("newNotification", messageObject);
  console.log(messageObject)

  },

  minimize(e) {
    jQuery(".chat-app").toggleClass("minimize");
    // jQuery("#messageList").slideToggle();
  },

  renderChatWindows(chatws) {
    for (let chatID in chatws) {
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
  },

  render() {
    // console.log(this.props.cable.messages)
    return (
      <div>
      {this.renderChatWindows(this.props.cable.messages)}
      </div>
    )
  }

});
