import React, { Component } from 'react';
import AppHeader from '../app_header/AppHeader.jsx';
import SearchBox from '../search_box/SearchBox.jsx';
import Card from '../card/Card.jsx';

class HomeLayout extends Component {
  constructor(props) {
    super(props);
    this.showTopFour = this.showTopFour.bind(this);
  }

  showTopFour(tutors) {
    let topFour = [];
    for(let i = 0; i < 4; i++) {
      topFour.concat(<li className="show-item"><Card className="no-detail" tutor={tutors[i]} key={i} /></li>);
    }
    return topFour.join();
  }

  render() {
    if (this.props.tutors.length > 0) {
    return (
      <div className="home-layout row">
        <AppHeader type="home" className="z-index3"/>
        <section className="main-content">
          <section className="tagline">
            <h1><span className="brand">Tuber&nbsp;</span>
              <span className="tagline-text">connects students with 
              tutors painlessly. No more email lags folks!</span>
            </h1>
          </section>
          
          <section className="main-search-wrapper z-index2">
            <h4 className="label">What subject do you need help with?</h4>
            <div className="search-group">
              <SearchBox className="main-search"/>
              <button name="search" className="z-index2" >Search</button>
            </div>
          </section>

          <section className="shows">
            <article className="show">
              <h2 className="show-title">Most popular subjects</h2>
              <ul className="row show-items">
                <li className="show-item"><Card className="no-detail" tutor={this.props.tutors[0]} key={0} /></li>
                <li className="show-item"><Card className="no-detail" tutor={this.props.tutors[1]} key={1} /></li>
                <li className="show-item"><Card className="no-detail" tutor={this.props.tutors[2]} key={2} /></li>
                <li className="show-item"><Card className="no-detail" tutor={this.props.tutors[3]} key={3} /></li>
              </ul>
            </article>
            <article className="show">
              <h2 className="show-title">Tutors for Most popular subjects</h2>
              <ul className="row show-items">
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
              </ul>
            </article>
            <article className="show">
              <h2 className="show-title">Maths Tutors</h2>
              <ul className="row show-items">
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
              </ul>
            </article>
            <article className="show">
              <h2 className="show-title">Physics Tutors</h2>
              <ul className="row show-items">
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
              </ul>
            </article>
            <article className="show">
              <h2 className="show-title">Highly Rated Tutors</h2>
              <ul className="row show-items">
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
              </ul>
            </article>
            <article className="show">
              <h2 className="show-title">Recently Joined Tutors</h2>
              <ul className="row show-items">
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
                <li className="show-item"><Card className="no-detail"/></li>
              </ul>
            </article>
          </section>
        </section>
      </div>
    )} return null;
  }
}

export default HomeLayout;