import React, { Component } from "react";
import Rating from "react-rating";

export default class Review extends Component {

  render() {
    const review = this.props.review;
    return (
      <article className="review row" >
        <figure className="reviewer" >
          <img className="avatar" src={review.avatar} />
          <figcaption className="reviewer-name" >{review.reviewer}</figcaption>
        </figure>
        <blockquote className="review-text" >
          <Rating
           readonly={true}
           initialRate={review.rating}
           empty='fa fa-star-o'
           full='fa fa-star'
          />
          <p>{review.content}</p>
          <footer>{review.city}, {review.country} · {review.created_at}</footer>
        </blockquote>
      </article>
    )
  }
}