// Load up the application styles
require("./tuber_appointment.scss");

import React, { Component } from "react";
import moment from 'moment';

export default class TuberAppointment extends Component {

  constructor(props) {
    super(props)
    this.HOURS = [
      "08", "09", "10", "11", "12",
      "13", "14", "15", "16", "17"
    ];
    this.DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.bookings = {
      "Mon": [], "Tue": [], "Wed": [], "Thu": [], "Fri": [], "Sat": [], "Sun": []
    }
  }

  handleSlotSelect(e) {
    const clicked = e.target;
    if (clicked.matches("td")) {
      if (clicked.matches(".timing")) {
        this.toggleTimeRow(clicked);
      } else {
        this.toggleCell(clicked);
      }
      console.log(this.bookings)
      return false;
    }
  }

  toggleTimeRow(row) {
    if (row.classList.contains("selected")) {
      row.classList.remove("selected");
      this.loopSibling(
        row.nextElementSibling,
        (el) => this.unselectCell(el)
      )
    } else {
      row.classList.add("selected");
      this.loopSibling(
        row.nextElementSibling,
        (el) => this.selectCell(el)
      )
    }
  }

  loopSibling(start, cb) {
    while(start) {
      cb(start)
      start = start.nextElementSibling;
    }
  }

  toggleCell(cell) {
    if (cell.classList.contains("selected")) {
      this.unselectCell(cell)
    } else {
      this.selectCell(cell)
    }
  }

  selectCell(clicked) {
    clicked.classList.add("selected");
    const info = JSON.parse(clicked.getAttribute("data-info"));
    const idx = this.bookings[info.day].indexOf(info.hour);
    idx === -1 && this.bookings[info.day].push(info.hour)
  }

  unselectCell(daySlot) {
    const info = JSON.parse(daySlot.getAttribute("data-info"));
    const idx = this.bookings[info.day].indexOf(info.hour);
    idx > -1 && this.bookings[info.day].splice(idx, 1)
    daySlot.classList.remove("selected");
  }

  buildTableBody(bookings = {}) {
    return this.HOURS.map(hh => {
      return (
        <tr key={hh}>
          <td className="timing" key={hh} data-hour={hh} >{hh}:00</td>
          {this.DAYS.map(ddd => <td key={ddd}
            data-info={JSON.stringify({hour: hh, day: ddd})}
            className={(bookings[ddd] && bookings[ddd].includes(hh)) ? "selected" : ""} >
            </td>
          )}
        </tr>
      )
    })
  }

  render() {
    return (
      <section id="tuber-appointment">
        <p>My Appointments</p>
        <table onClick={(e) => this.handleSlotSelect(e)} >
          <colgroup>
            <col style={{cursor: "default"}} />
            <col span="7" />
          </colgroup>
          <thead><tr>
            <th></th>
            {this.DAYS.map(ddd => <th key={ddd}>{ddd}</th>)}
          </tr></thead>
          <tbody>
            {this.buildTableBody({Fri: ["04"]})}
          </tbody>
        </table>
      </section>
    )
  }
}
