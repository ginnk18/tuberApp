import React, { Component } from 'react';
import { classes } from '../utils';

class SearchBox extends Component {



  subjectSearch(e) {
    e.preventDefault();
    console.log('search_term', e.target.value);
    axios({method: 'get',
           url: `http://localhost:3000/tutors/search/:${this.state.search_term}`,
           data: { search_term: e.target.value }
         })
      .then(response => {
        console.log('response', response);
        store.dispatch({ type: types.SEARCH, payload: response.data });
      })
      .catch((error) => {
        // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
      });
  }

  render() {
    return (
      <div className={classes.call(this, "search-box")}>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input onsearch={(e) => this.subjectSearch(e)} className="search-input" type="search" name="search_term" />

        {/*<form onSubmit={this.subjectSearch}
                      className="navbar-form navbar-left"
                      id="tuber-search-form">
                  <span className="form-group" id= "tuber-search-form" >
                    <input name="search_term"
                           type="text"
                           className="form-control"
                           placeholder="Enter a subject"
                           value={this.state.search_term}
                           onChange={this.handleInputChange}/>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </span>
                </form>*/}
      </div>
    )
  }
}

export default SearchBox;