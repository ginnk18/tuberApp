import React, { Component } from "react";
import moment from 'moment';
import TuberAppointment from './TuberAppointment.jsx';

export default class Availability extends Component {

  handleSlotSelect(info) {
    console.log(info);
    return true;
  }

  render() {
    const avail = this.props.availability;
    return (
      <section id="availability">
         <TuberAppointment  />
        {Object.keys(avail).map(day => <div key={day}>{day}: {avail[day]}</div>)}
      </section>
    )
  }
}