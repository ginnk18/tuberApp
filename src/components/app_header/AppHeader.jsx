import React, { Component } from 'react';
import { classes } from '../utils';
import Logo from '../logo/Logo.jsx';
import SearchBox from '../search_box/SearchBox.jsx';
import Nav from '../nav/Nav.jsx';
import HeaderDropdown from '../header_dropdown/HeaderDropdown.jsx'

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.decideSearchOrNot = this.decideSearchOrNot.bind(this);
  }

  decideSearchOrNot() {
    console.log('in decide search ', this.props);
    console.log('in decide search ', this.state);
    console.log(this.props.type !== 'home');
    if (this.props.type !== 'home') {
      return <HeaderDropdown />
    }
    else {
      return <div className="spacer" />
    }
  }

  render() {

    return <div>
           <header className={classes.call(this, "main-header")} >
             <Logo />
             { this.decideSearchOrNot() }
             <Nav />
           </header>
           </div>
  }
}

export default AppHeader;