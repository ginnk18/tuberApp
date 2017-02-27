import React, { Component } from 'react';
import { classes } from '../utils';

class SearchBox extends Component {

  render() {
    return <div className={classes.call(this, "search-box")}>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="search-input" type="search" />
           </div>
  }
}

export default SearchBox;