import React, { Component } from 'react';
import { classes } from '../utils';
import store from '../../tuberStore';
import { profileActions } from '../../actions'

class Card extends Component {

  availabilityColor() {
    if (this.props.tutor.is_available) {
      return [["#11dd11", "available and online"], ["#dddd11", "available but offline"]][Math.floor(Math.random() * 2)];
    }
    return ["#999999", "unavailable"];
  }

  render() {
    if (this.props.tutor) {
        // const reviews = this.props.tutors.reviews;
        // const sampleReview = reviews[Math.floor(Math.random(reviews.length))]
        const [clr , available] = this.availabilityColor.bind(this)();
        return <figure className={classes.call(this, "card")}>
                <img onClick={() => store.dispatch(profileActions.loadProfile(this.props.tutor.id)) } src={this.props.tutor.avatar} />
                <figcaption className="main">
                  <a href="#0" onClick={() => store.dispatch(profileActions.loadProfile(this.props.tutor.id)) } >
                    <strong className="name">{this.props.tutor.name}</strong><br/>
                  </a>
                  <span className="tutor-attr">Rate:&nbsp;&nbsp;</span><span>${this.props.tutor.rate_cents / 100}</span><br/>
                  <span className="tutor-attrSub">Subjects:&nbsp;&nbsp;</span><span>{this.props.tutor.subjects}</span><br/>
                  <span className="tutor-attr">Qualification:&nbsp;&nbsp;</span><span>{this.props.tutor.education}</span><br/>
                  <span className="tutor-attr">Experience:&nbsp;&nbsp;</span><span>{this.props.tutor.experience}</span>
                  <div className="card-btn">
                    <a className="z-index1" href="#0">contact</a>
                    <a className="z-index1" href="#0" onClick={() => store.dispatch(profileActions.loadProfile(this.props.tutor.id)) }>see more</a>
                  </div>
                  {/*<blockqoute>
                                      <p><em>
                                        {`${sampleReview.content.substring(0,20)}...`}
                                      </em></p>
                                      <footer>
                                      — <cite><a href="#0">{sampleReview.reviewer}</a></cite>
                                      </footer>
                                    </blockqoute>
                  <ul className="next-prev">
                    <li className="prev"><a href="#0"><i className="fa fa-chevron-left" aria-hidden="true"></i></a></li>
                    <li className="next"><a href="#0"><i className="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                  </ul>
                </figcaption>
                <figcaption className="rate">
                  <div><strong>Physics</strong> ${this.props.tutor.rate_cents / 100}/hr</div>
                  <div>
                    <i style={{color:{clr}}} className="fa fa-circle" aria-hidden="true"></i>
                    &nbsp; {available}  ·  {this.props.tutor.current_location.city}, {this.props.tutor.current_location.country}
                  </div>
                  <div>
                    <Rating
                    readonly={true}
                    initialRate={reviews.reduce((sum,r) => sum + r.rating, 0) / reviews.length}
                    empty='fa fa-star-o'
                    full='fa fa-star'
                    />
                    &nbsp;in {reviews.length} reviews
                  </div>*/}
                </figcaption>
              </figure>
    }
    return null;
  }
}

export default Card;
