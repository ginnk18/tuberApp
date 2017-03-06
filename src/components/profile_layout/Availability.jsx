import React, { Component } from "react";
import moment from 'moment';
import TuberAppointment from './TuberAppointment.jsx';

export default class Availability extends Component {

  render() {
    return (
      <section id="availability">
         <TuberAppointment profileID={this.props.profileID} bookings={this.props.availability} />
      </section>
    )
  }
}