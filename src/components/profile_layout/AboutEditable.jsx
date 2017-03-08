import React, { Component } from "react";

export default class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current_location: this.props.profile.current_location,
      subjects: this.props.profile.subjects
    }
    this.SUBJECTS = [
      'Visual Arts', 'Geography', 'History',
      'Literature', 'Philosophy', 'Economics',
      'Law', 'Political science', 'Psychology',
      'Sociology', 'Biology', 'Chemistry',
      'Earth and space sciences', 'Mathematics',
      'Physics', 'Agriculture', 'Computer science',
      'Engineering', 'Medicine'
    ]
  }

  renderSubjects() {
    return this.SUBJECTS.map(s => {
      let picked = this.props.profile.subjects.includes(s) && "picked";
      return <span 
              key={s}
              data-subject={s}
              className={`subject-label ${picked}`}>{s}</span>
    })
  }

  toggleSelect(e) {
    const picked = e.target;
    if (picked.matches(".subject-label")) {
      if (picked.classList.contains("picked")) {
        this.unselectCell(picked)
      } else {
        this.selectCell(picked)
      }
    }
  }

  selectCell(picked) {
    picked.classList.add("picked");
    const subject = picked.getAttribute("data-subject");
    const idx = this.state.subjects.indexOf(subject);
    idx === -1 && this.state.subjects.push(subject)
  }

  unselectCell(picked) {
    const subject = picked.getAttribute("data-subject");
    const idx = this.state.subjects.indexOf(subject);
    idx > -1 && this.state.subjects.splice(idx, 1)
    picked.classList.remove("picked");
  }

  handleInputChange(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    if (input.matches("input")) {
      if (name.includes("address")) {
        this.setState({current_location: {[name.replace("address-", "")]: value}});
      } 
      if (name === "rate_cents") {
        this.setState({[name]: (value * 100)})
      }
      else {
        this.setState({[name]: value})
      }
    }
  }

  render() {
    const profile = this.props.profile;
    return (
      <section className="about">
        <h2 className="head-wrapper">About Me
          <i onClick={(e) => this.props.update(this.state)} className="fa fa-floppy-o"></i>
        </h2>
        <dl onChange={(e) => this.handleInputChange(e)} className="profile-summary">
          <dt>Contact</dt>
          <dd>Email: &nbsp;<span>{profile.email} </span></dd>
          <dd>Phone: &nbsp;<input name="phone" type="tel" defaultValue={profile.phone} /></dd>
          <dd>Address: &nbsp;
            <input name="address-other" type="text" defaultValue={profile.address} /><br/>
            <span>{profile.city}</span> · <span>{profile.country}</span>
           </dd> 
          <dt>Qualification</dt>
          <dd><input name="education" type="text" defaultValue={profile.education} /></dd>

          <dt>Experience</dt>
          <dd><input name="experience" type="text" defaultValue={profile.experience} /></dd>

          <dt>Subjects Expertise</dt>
          <dd onClick={(e) => this.toggleSelect(e)} >{this.renderSubjects()}</dd>

          <dt>Rate</dt>
          <dd>$ per hour<input name="rate_cents" type="number" 
              defaultValue={Number(profile.rate.slice(1).replace(/\/hr/, ""))} />
          </dd>
        </dl>
      </section>
    )
  }
}