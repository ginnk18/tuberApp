import React, { Component } from 'react';

class SearchBox extends Component {

  render() {
    return <div className="search-box">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input className="search-input" type="search" />
           </div>
  }
}

export default SearchBox;