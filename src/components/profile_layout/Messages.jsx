import React, { Component } from "react";
import Message from "./Message.jsx";

export default class Messages extends Component {

  render() {
    return (
      <section id="messages">
        <Message />
      </section>
    )
  }
}