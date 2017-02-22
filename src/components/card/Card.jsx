import React, { Component } from 'react';
import { classes } from '../utils';

class Card extends Component {

  render() {
    return <figure className={classes.call(this, "card")}>
            <img src="http://placehold.it/330x489" />
            <figcaption>
              <strong className="name">Maria Sharapova</strong><br/>
              <span className="tutor-attr">Major:&nbsp;&nbsp;</span><span>Electrical Engineering</span><br/>
              <span className="tutor-attr">Other Subjects:&nbsp;&nbsp;</span><span>Physics, Psychology, Chemistry and History</span><br/>
              <span className="tutor-attr">Qualification:&nbsp;&nbsp;</span><span>Phd. Social Engineering and Phishing</span><br/>
              <span className="tutor-attr">Experience:&nbsp;&nbsp;</span><span>25 years tutoring</span>
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
              <div><strong>Physics</strong> $25/hr</div>
              <div>
                <i style={{color:"#11dd11"}} className="fa fa-circle" aria-hidden="true"></i>
                &nbsp; available and online  ·  calgary, NW
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
}

export default Card;