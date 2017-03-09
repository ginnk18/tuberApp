import React, { Component } from "react";
import { profileActions } from "../../actions";
import store from "../../tuberStore.js";
import cookie from "react-cookie";

export default class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  showEditable(e) {
    this.setState({editable: true});
    console.log(this.state.editable)
  }

  update(data) {
    this.setState({editable: false});
    data.id = this.props.profile.id;
    store.dispatch(profileActions.updateProfile(data))
    console.log(this.state.editable)
    console.log("Im gonna update", this)
    console.log("data", data)
  }

  showEditButton(loggedIn) {
    if (loggedIn && (loggedIn.id === this.props.profile.id)) {
      return <i onClick={(e) => this.showEditable(e)} className="fa fa-edit"></i>
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  decideEditable() {
    const loggedIn = cookie.load("user");
    {/*// if (loggedIn && (loggedIn.id === this.props.profile.id) && this.state.editable) {
    //   return <div>
    //           <i onClick={(e) => this.props.update(this.state)} className="fa fa-floppy-o"></i>
    //           <textarea name="description" onChange={(e) => this.handleChange(e)} defaultValue={this.props.profile.summary}>
              
    //           </textarea>
    //         </div>
    // } else {*/}
      return <div>
                 {/*{this.showEditButton(loggedIn)}*/}
                <blockquote className="quirky">
                {this.props.profile.summary}
                </blockquote>
              </div>
   {/*}*/}
  }

  render() {
    const profile = this.props.profile;   

    return (
      <div>
        <h1>Hey, I'm {profile.first_name}</h1>
        <h3>
          <i style={{color:profile.status.color}} className="fa fa-circle" aria-hidden="true"></i>
          &nbsp; {profile.status.text} · {profile.city}, {profile.country} · tubering since {profile.joined_date}
        </h3>
        <a href="#0" className="report"><i className="fa fa-flag" aria-hidden></i>
          Report tutor
        </a>
        {this.decideEditable()}
      </div>
    )
  }
}