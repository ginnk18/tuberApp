import React, { Component } from 'react';
import Logo from '../logo/Logo.jsx';
import SearchBox from '../search_box/SearchBox.jsx';
import Nav from '../nav/Nav.jsx';

class AppHeader extends Component {

  render() {
    let classes = `main-header ${this.props.className}`
    return <header className={classes} >
            <Logo />
            <SearchBox />
            <Nav />
           </header>
  }
}

export default AppHeader;