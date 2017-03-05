import React, { Component } from 'react';
import { classes } from '../utils';
import Logo from '../logo/Logo.jsx';
import SearchBox from '../search_box/SearchBox.jsx';
import Nav from '../nav/Nav.jsx';

class AppHeader extends Component {

  decideSearchOrNot() {
    if (this.props.type !== 'home') {
      return <SearchBox />
    }
    else {
      return <div className="spacer" />
    }
  }

  render() {

    return <div>
           <header className={classes.call(this, "main-header")} >
           {this.decideSearchOrNot()}
            <Logo />
            <Nav />
           </header>
           </div>
  }
}

export default AppHeader;