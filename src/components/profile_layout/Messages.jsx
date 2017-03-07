import React, { Component } from "react";
import TuberMessage from "./messaging/App.jsx";

export default class Messages extends Component {

  render() {
    return (
      <section id="messages">
        <TuberMessage cable={this.props.cable} profile={this.props.profile} />
      </section>
    )
  }
}