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

    return <header className={classes.call(this, "main-header")} >
           {<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />}
            <Logo />

            <Nav />
           </header>
  }
}

export default AppHeader;