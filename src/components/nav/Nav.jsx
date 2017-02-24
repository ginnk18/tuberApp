import React, { Component } from 'react';
import store from '../../tuberStore';
import { tutorActions } from '../../actions';
import Logo from '../logo/Logo.jsx';
import SearchBox from '../search_box/SearchBox.jsx';


class Nav extends Component {
  decideSearchOrNot() {
    if (this.props.type !== 'home') {
      return <SearchBox />
    }
    else {
      return <div className="spacer" />
    }
  }

  render() {
    const handleClick = ()=> store.dispatch(tutorActions.showRegisterTutorForm())
    return (
      <nav className="navbar navbar-default main-nav">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" id="logo" href="/">Tuber</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" id="tuber-search-form">
              <span className="form-group" id= "tuber-search-form">
                <input type="text" className="form-control" placeholder="Enter a subject"/>
                <button type="submit" className="btn btn-default">Submit</button>
              </span>
            </form>
            <ul className="nav navbar-nav navbar-right">
                <li><a onClick={ handleClick } href= "#0">Become a tutor</a></li>
                <li><a href="#0">Register as a Student</a></li>
                <li><a href="#0">Log in</a></li>
            </ul>
          </div>
        </div>
      </nav>


      // <nav className="main-nav navbar">
      //   <div className="container-fluid">
      //     <Logo />
      //     {this.decideSearchOrNot()}
      //     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      //       <ul className="nav navbar-nav navbar-right">
      //         <li><a onClick={ handleClick } href= "#0">Become a tutor</a></li>
      //         <li><a href="#0">Register as a Student</a></li>
      //         <li><a href="#0">Log in</a></li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    )
  }
}

export default Nav;