import React, { Component } from 'react';
import { classes } from '../utils';

class Card extends Component {

  availabilityColor() {
    if (this.props.tutor.is_available) {
      return [["#11dd11", "available and online"], ["#dddd11", "available but offline"]][Math.floor(Math.random() * 2)];
    }
    return ["#999999", "unavailable"];
  }

  render() {
    if (this.props.tutor) {
        const [clr , available] = this.availabilityColor.bind(this)();
        return <figure className={classes.call(this, "card")}>
                <img src={this.props.tutor.avatar} />
                <figcaption>
                  <strong className="name">{this.props.tutor.name}</strong><br/>
                  <span className="tutor-attr">Major:&nbsp;&nbsp;</span><span>{this.props.tutor.subjects}</span><br/>
                  <span className="tutor-attr">Other Subjects:&nbsp;&nbsp;</span><span>{this.props.tutor.subjects}</span><br/>
                  <span className="tutor-attr">Qualification:&nbsp;&nbsp;</span><span>{this.props.tutor.education}</span><br/>
                  <span className="tutor-attr">Experience:&nbsp;&nbsp;</span><span>{this.props.tutor.experience}</span>
                  <div className="card-btn">
                    <a className="z-index1" href="#0">hire</a>
                    <a className="z-index1" href="#0">see more</a>
                  </div>
                  <blockqoute>
                    <p><em>
                      "Marias really a great tutor. I wouldnt pay her shyt to teach nofn"
                    </em></p>
                    <footer>
                    — <cite><a href="#0">Jennifer Lawson</a></cite>
                    </footer>
                  </blockqoute>
                  <ul className="next-prev">
                    <li className="prev"><a href="#0"><i className="fa fa-chevron-left" aria-hidden="true"></i></a></li>
                    <li className="next"><a href="#0"><i className="fa fa-chevron-right" aria-hidden="true"></i></a></li>
                  </ul>
                </figcaption>
                <figcaption>
                  <div><strong>Physics</strong> ${this.props.tutor.rate_cents / 100}/hr</div>
                  <div>
                    <i style={{color:{clr}}} className="fa fa-circle" aria-hidden="true"></i>
                    &nbsp; {available}  ·  {this.props.tutor.current_location.city}, {this.props.tutor.current_location.country}
                  </div>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i> in 56 reviews
                  </div>
                </figcaption>
              </figure>
    }
    return null;
  }
}

export default Card;
