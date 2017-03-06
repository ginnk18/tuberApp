import React, { Component } from 'react';
import axios from 'axios';
import { classes } from '../utils';
import types from '../../actions/actionTypes';
import store from '../../tuberStore';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.subjectSearch = this.subjectSearch.bind(this);
  }


  subjectSearch(e) {
    console.log('in subject search', e.target.value);
    const search_term = e.target.value;
    e.preventDefault();
    axios({method: 'get',
         url: `http://localhost:3000/search`,
         params: {city: '*',
                  status_code: '*',
                  rate_range: '*',
                  subject: search_term,
                  sort: '*'}
       })
    .then(response => {
      console.log('response', response);
      store.dispatch({ type: types.SEARCH, payload: {tutors: response.data, subject: search_term} });
    })
    .catch((error) => {
      // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
    });
  }

  render() {
    return (
        <div className="selectContainer">
          <select onChange={(event)=>this.subjectSearch(event)}
                  name="subject">
            <option value="*">Pick a subject to search for tutors</option>
            <option value='Visual Arts'>Visual Arts</option>
            <option value='Geography'>Geography </option>
            <option value='History'>History </option>
            <option value='Literature'>Literature </option>
            <option value='Philosophy'>Philosophy </option>
            <option value='Economics'>Economics </option>
            <option value='Law'>Law </option>
            <option value='Political science'>Political science </option>
            <option value='Psychology'>Psychology </option>
            <option value='Sociology'>Sociology </option>
            <option value='Biology'>Biology </option>
            <option value='Chemistry'>Chemistry </option>
            <option value='Earth and space sciences'>Earth and space sciences </option>
            <option value='Mathematics'>Mathematics </option>
            <option value='Physics'>Physics </option>
            <option value='Agriculture'>Agriculture </option>
            <option value='Computer science'>Computer science </option>
            <option value='Engineering'>Engineering </option>
            <option value='Medicine'>Medicine </option>
            </select>
          </div>
    )
  }
}

export default SearchBox;