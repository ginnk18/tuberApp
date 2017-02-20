import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import Card from '../card/Card.jsx';

class SearchResultLayout extends Component {

  render() {
    return (
      <div className="search-result-layout row">
        <AppHeader /> 
        <section className="filters">
          <select name="Country">
            <option value="">Country</option>
            <option value="canada" selected>Canada</option>
            <option value="nigeria">Nigeria</option>
            <option value="qatar">Qatar</option>
          </select>
          <select name="City">
            <option value="">City</option>
            <option value="canada" selected>Calgary</option>
            <option value="nigeria">Toronto</option>
            <option value="qatar">Vancouver</option>
          </select>
          <select name="Availability">
            <option value="">Availability</option>
            <option value="all" selected>All</option>
            <option value="nigeria">Available and onine</option>
            <option value="qatar">Unavailabe</option>
          </select>
          <select name="rate_range">
            <option value="">Rate range</option>
            <option value="canada" selected>$0/hr - $15/hr</option>
            <option value="nigeria">$15/hr - $50/hr</option>
            <option value="qatar">> $50/hr</option>
          </select>
          <select name="Major">
            <option value="">Major</option>
            <option value="canada" selected>Physics</option>
            <option value="nigeria">Toronto</option>
            <option value="qatar">Vancouver</option>
          </select>
          <select name="Sort">
            <option value="">Sort by</option>
            <option value="rate" selected>Rate</option>
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
          <iframe width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17953.437785452483!2d-114.10257767293234!3d51.052182808984014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1487569968863"></iframe>
        </aside>
      </div>
    )
  }
}

export default SearchResultLayout;