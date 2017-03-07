import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';
import GoogleMap from '../google_map/GoogleMap.jsx'
import axios from 'axios';
import types from '../../actions/actionTypes';
import HeaderDropdown from '../header_dropdown/HeaderDropdown.jsx'
import SearchBox from '../search_box/SearchBox.jsx';

class HomeLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {city: '*',
                  status_code: '*',
                  rate_range: '*',
                  subject: '*',
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
    console.log("STATES!!!!!!!",this.state.tutors)
    console.log("PROPS", this.props.tutors)


    return (

    <div>
    <div className="home-layout row">
      <AppHeader type="home" className="z-index3"/>
      <section className="main-content">
        <section className="tagline">
          <h1><span className="brand">Tuber&nbsp;</span>
            <span className="tagline-text">painlessly connects students with
            tutors.</span>
          </h1>
          <div className="styleButton">
          <HeaderDropdown />
          </div>
          <section className="three-fifth results">
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
          <aside className="mainMap">
          <GoogleMap tutors = {this.props.tutors}/>
          </aside>
          </section>
        </section>
        </div>
        </div>
    )
  }
}


export default HomeLayout;
