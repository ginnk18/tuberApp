import React, { Component } from "react";

export default class Availability extends Component {

  render() {
    const avail = this.props.availability;
    return (
      <section id="availability">
        {Object.keys(avail).map(day => <div key={day}>{day}: {avail[day]}</div>)}
      </section>
    )
  }
}