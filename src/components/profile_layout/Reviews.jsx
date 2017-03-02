import React, { Component } from "react";
import Review from "./Review.jsx";
import Rating from "react-rating";

export default class Reviews extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  handleReview(e) {
    e.preventDefault();
    const data = {
      city: "Ibadan",
      country: "Nigeria",
      text: document.getElementById("new-review-text").value,
      rating: this.state.rating,
      reviewer: "bolly", //loggedin user. first_name
      reviewer_id: 23
    }
    console.log(data);
  }

  handleRating(r) {
    console.log(r)
    this.state.rating = r;
  }

  render() {
    return (
      <section id="reviews">
        <h2 className="review-summary">
          <Rating
           readonly={true}
           initialRate={4}
           empty='fa fa-star-o'
           full='fa fa-star'
          />
          &nbsp;in 39 reviews
        </h2>
        <form onSubmit={(e) => this.handleReview(e)} className="new-review">
          <div>
            Rate your lesson &nbsp;<Rating onChange={(r) => this.handleRating(r)} name="new-rating"
            empty='fa fa-star-o' full='fa fa-star' />
          </div>
          <label htmlfor="new-review">Your Review here</label>
          <textarea id="new-review-text" placeholder="Your Review here" />
          <button type="submit" className="">Submit</button>
      </form>
       {this.props.reviews.map(r => <Review key={r.id} review={r} />)}
      </section>
    )
  }
}