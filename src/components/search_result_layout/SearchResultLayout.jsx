import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';

class SearchResultLayout extends Component {

  constructor(props) {
    super(props);
    console.log('props', props);
    console.log('state', this.state);
    this.state = {city: '',
                  availability: '',
                  rate_range: '',
                  subject: '',
                  sort: ''
                  };

    this.handSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
    <div>
      <div className="search-result-layout row">
        <AppHeader />
        <section className="filters z-index3">
          <select name="City" defaultValue="">
            <option value="city_default">City</option>
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
          <select name="Availability">
            <option value="availability_default">Availability</option>
            <option value="all" >All</option>
            <option value="nigeria">Available and onine</option>
            <option value="qatar">Unavailabe</option>
          </select>
          <select name="rate_range">
            <option value="rate_default">Rate</option>
            <option value="0" >$0/hr - $20/hr</option>
            <option value="20">$20/hr - $40/hr</option>
            <option value="40">$40/hr - $60/hr</option>
            <option value="60">$60/hr - $80/hr</option>
            <option value="80">$80/hr - $100/hr</option>
          </select>
          <select name="Subject">
            <option value="subject_default">Subject</option>
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
            <option value='Medicine'>Medicine </option>          </select>
          <select name="Sort">
            <option value="sort_default">Sort by</option>
            <option value="rate" >Rate</option>
            <option value="review">Review stars</option>
            <option value="availability">Availability</option>
          </select>
        </section>
        <section className="three-fifth results">
          <div className="notices"><h5>some notices</h5></div>
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
          { <iframe width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17953.437785452483!2d-114.10257767293234!3d51.052182808984014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1487569968863"></iframe>}
        </aside>
      </div>
      <div>
      </div>
    </div>
    )
  }
}

export default SearchResultLayout;



