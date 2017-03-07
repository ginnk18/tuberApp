import React from 'react';
import cookie from "react-cookie";

class Message extends React.Component {
  render() {
    // Was the message sent by the current user. If so, add a css class
    const message = this.props.message;
    const myID = cookie.load("user") && cookie.load("user").id
    const fromMe = myID === message.sender_id ? 'from-me' : '';

    return (
      <div className={`message ${fromMe}`}>
        <div className='username'>
          { message.username }
        </div>
        <div className='message-body'>
          { message.message }
        </div>
      </div>
    );
  }
}

export default Message;
