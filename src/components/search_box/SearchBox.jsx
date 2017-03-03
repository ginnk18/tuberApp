import React, { Component } from 'react';
import axios from 'axios';
import { classes } from '../utils';
import types from '../../actions/actionTypes';

class SearchBox extends Component {

  subjectSearch(e) {
    if (e.key === "Enter") {
      const search_term = e.target.value;
      e.preventDefault();
      axios(`http://localhost:3000/tutors/search/:${search_term}`)
      .then(response => {
        console.log('response', response);
        store.dispatch({ type: types.SEARCH, payload: response.data });
      })
      .catch((error) => {
        // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
      });
    }
  }

  render() {
    return (
      <div className={classes.call(this, "search-box")}>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input onKeyUp={(e) => this.subjectSearch(e)} className="search-input" type="search" />  
      </div>
    )
  }
}

export default SearchBox;