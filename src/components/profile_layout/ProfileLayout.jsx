import React, { Component } from 'react';
import '../../../styles/variables.scss';
import AppHeader from '../app_header/AppHeader.jsx';
import SearchBox from '../search_box/SearchBox.jsx';
import Card from '../card/Card.jsx';

class ProfileLayout extends Component {

  render() {
    return (
      <div className="profile-layout row">
        <AppHeader className="border-butt"/>
        
        <section className="main-content">
          <section className="row">
            <aside className="profile-summaries one-third">
              <img src="http://placehold.it/1580" />
            </aside>
            <div className="intro profile-details two-third">
              <h1>Hey, I'm Jovanna</h1>
              <h3>
                <i style={{color:"#11dd11"}} className="fa fa-circle" aria-hidden="true"></i>
                &nbsp; available and online · City, Country · Tubering since February 2017
              </h3>
              <a href="#0" className="report"><i className="fa fa-flag" aria-hidden></i>
                Report tutor
              </a>
              <blockquote className="quirky">
                Sed blandit sollicitudin dapibus. Sed justo ligula, congue a accumsan ut, 
                dignissim at metus. Nullam consectetur tempus velit quis tincidunt. 
                Vestibulum fringilla arcu eu felis
              </blockquote>
            </div>
          </section>

          <section className="row">
            <aside className="profile-summaries one-third">
              <section className="about">
                <h2>About Me</h2>
                <dl className="profile-summary">
                  <dt>Contact</dt>
                  <dd>Email: <span>mightytutor@tubers.ca</span></dd>
                  <dd>Phone: <span>403-5862-1452</span></dd>
                  <dd>Address: <span>119 14th Avenue, Calgary NW, AB, Canada</span></dd>
                  
                  <dt>Qualification</dt>
                  <dd>Some dodgy Phd in philosophy from UofC..in ur phase:P</dd>

                  <dt>Experience</dt>
                  <dd>40 years experience lazing around and playing PES</dd>
                </dl>
              </section>
            </aside>
            <div className="profile-details two-third tab-area" >
              <div className="tabs-buttons-wrapper">
                <a className="active" href="#0" data-id="reviews">Reviews</a>
                <a href="#0" data-id="availability">Availability</a>
                <a href="#0" data-id="messages">Messages</a>
              </div>
              <section id="reviews">
                <h2 className="review-summary">4/5 in 39 reviews</h2>
                <article className="review row" >
                  <figure className="reviewer" >
                    <img className="avatar" src="https://placehold.it/100" />
                    <figcaption className="reviewer-name" >James</figcaption>
                  </figure>
                  <blockquote className="review-text" >
                    <p>Lorem Ipsum is ting industry. Lorem type and scrambled it to make a 
                    type specimen book.</p>
                    <footer>Calgary, Canada · February 2017</footer>
                  </blockquote>
                </article>
                <article className="review row" >
                  <figure className="reviewer" >
                    <img className="avatar" src="https://placehold.it/100" />
                    <figcaption className="reviewer-name" >James</figcaption>
                  </figure>
                  <blockquote className="review-text" >
                    <p>Lorem Ipsum is ting industry. Lorem type and scrambled it to make a 
                    type specimen book.</p>
                    <footer>Calgary, Canada · February 2017</footer>
                  </blockquote>
                </article>
                <article className="review row" >
                  <figure className="reviewer" >
                    <img className="avatar" src="https://placehold.it/100" />
                    <figcaption className="reviewer-name" >James</figcaption>
                  </figure>
                  <blockquote className="review-text" >
                    <p>Lorem Ipsum is ting industry. Lorem type and scrambled it to make a 
                    type specimen book.</p>
                    <footer>Calgary, Canada · February 2017</footer>
                  </blockquote>
                </article>
              </section>
              <section id="availability">

              </section>
              <section id="messages">

              </section>         
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default ProfileLayout;