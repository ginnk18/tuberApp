import React, { Component } from "react";
import Review from "./Review.jsx";

export default class Reviews extends Component {

  render() {
    return (
      <section id="reviews">
        <h2 className="review-summary">4/5 in 39 reviews</h2>
        <Review />
      </section>
    )
  }
}