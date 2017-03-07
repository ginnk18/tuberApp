import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';
import GoogleMap from '../google_map/GoogleMap.jsx'
import axios from 'axios';
import types from '../../actions/actionTypes';

class SearchResultLayout extends Component {

  constructor(props) {
    super(props);
    console.log('props in searchresult layout ', props)
    this.state = {city: '*',
                  status_code: '*',
                  rate_range: '*',
                  subject: props.subject,
                  sort: '*',
                  tutors: props.tutors};
    this.handSelectChange = this.handleSelectChange.bind(this);
    this.showCards = this.showCards.bind(this);
  }

  handleSelectChange(event) {
    const target = event.target;
    const value = target.value;
    console.log('value', value);
    const name = target.name;
    this.setState({ [name]: value }, () => {
      console.log("this.state before axios ", this.state)
      axios({method: 'get',
             url: `http://localhost:3000/search/`,
             params: {city: this.state.city,
                      status_code: this.state.status_code,
                      rate_range: this.state.rate_range,
                      subject: this.state.subject,
                      sort: this.state.sort
                    }
           })
        .then(response => {
          console.log('response', response);
          this.setState({tutors: response.data});
          //store.dispatch({ type: types.SEARCH, payload: response.data });
        })
        .catch((error) => {
          // errorHandler(store.dispatch, error.response, types.AUTH_ERROR)
        });
    });
    console.log('this.state after selectChange', this.state);
  }

  showCards() {
    if (this.state.tutors.length > 0) {
      return this.state.tutors.map(tutor => <Card key = {tutor.id} tutor={tutor}/>)
    } else {
      return <div>There are no tutors who fit all these criteria. Please broaden your search. </div>
    }
  }

  render() {
    return (

    <div>
      <div className="search-result-layout">
        <AppHeader />
        <section className="filters">
        <div className="selectContainer">
          <select onChange={(event)=>this.handleSelectChange(event)}
                  name="city"
                  value={this.state.city}
                  className="col-xs-2">
            <option value="*">City</option>
            <option value="Calgary">Calgary</option>
            <option value="Edmonton">Edmonton</option>
            <option value="Hamilton">Hamilton</option>
            <option value="Kitchener">Kitchener</option>
            <option value="Montreal">Montreal</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Quebec City">Quebec City</option>
            <option value="Vancouver">Vancouver</option>
            <option value="Toronto">Toronto</option>
            <option value="Winnipeg">Winnipeg</option>
          </select>
        </div>
        <div className="selectContainer">
          <select onChange={(event)=>this.handleSelectChange(event)}
                  name="status_code"
                  value={this.state.status_code}
                  className="col-xs-2">
            <option value="*">Availability</option>
            <option value="1" >All</option>
            <option value="2">Available but offline</option>
            <option value="3">Unavailable</option>
          </select>
        </div>
        <div className="selectContainer">
          <select onChange={(event)=>this.handleSelectChange(event)}
                  name="rate_range"
                  value = {this.state.rate_range}
                  className="col-xs-2">
            <option value="*">Rate</option>
            <option value="0" >$0/hr - $20/hr</option>
            <option value="20">$20/hr - $40/hr</option>
            <option value="40">$40/hr - $60/hr</option>
            <option value="60">$60/hr - $80/hr</option>
            <option value="80">$80/hr - $100/hr</option>
          </select>
        </div>
        <div className="selectContainer">
          <select onChange={(event)=>this.handleSelectChange(event)}
                  name="subject"
                  value = {this.state.subject}
                  className="col-xs-2">
            <option value="*">Subject</option>
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
        <div className="selectContainer">
          <select onChange={(event)=>this.handleSelectChange(event)}
                  name="sort"
                  value = {this.state.sort}
                  className="col-xs-4">
            <option value="*">Sort by</option>
            <option value="rate-lowest-first" >Rate - lowest first</option>
            <option value="rate-highest-first" >Rate - highest first</option>
            <option value="review">Average review rating</option>
          </select>
        </div>
        </section>
        <section className="three-fifth results">
          <div className="notices"><h5></h5></div>
          {this.showCards()}
          <div className="row">
            <article className="result half">
              <Card />
            </article>
            <article className="result half">
              <Card />
            </article>
            <article className="result half">
              <Card />
            </article>
            <article className="result half">
              <Card />
            </article>
            <article className="result half">
              <Card />
            </article>
            <article className="result half">
              <Card />
            </article>
          </div>
        </section>
        <aside className="two-fifth map">
          <GoogleMap tutors = {this.state.tutors}/>
        </aside>
      </div>
    </div>
    )
  }
}

export default SearchResultLayout;



