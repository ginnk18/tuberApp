import React, { Component } from 'react';
import axios from 'axios';
import { classes } from '../utils';
import types from '../../actions/actionTypes';
import store from '../../tuberStore';

class Drop extends Component {
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
        <div className="dropdown">
        <button className="dropbtn">Pick a subject to search for tutors</button>
          <div className="dropdown-content" onChange={(event)=>this.subjectSearch(event)}
                  name="subject">
            <a href="#" value="Visual Arts">Visual Arts</a>
            <a href="#" value="Geography">Geography </a>
            <a href="#" value="History">History </a>
            <a href="#" value="Literature">Literature </a>
            <a href="#" value="Philosophy">Philosophy </a>
            <a href="#" value="Economics">Economics </a>
            <a href="#" value="Law">Law </a>
            <a href="#" value="Political science">Political science </a>
            <a href="#" value="Psychology">Psychology </a>
            <a href="#" value="Sociology">Sociology </a>
            <a href="#" value="Biology">Biology </a>
            <a href="#" value="Chemistry">Chemistry </a>
            <a href="#" value="Earth and space sciences">Earth and space sciences </a>
            <a href="#" value="Mathematics">Mathematics </a>
            <a href="#" value="Physics">Physics </a>
            <a href="#" value="Agriculture">Agriculture </a>
            <a href="#" value="Computer science">Computer science </a>
            <a href="#" value="Engineering">Engineering </a>
            <a href="#" value="Medicine">Medicine </a>
            </div>
          </div>
    )
  }
}

export default Drop;
