import React, { Component } from "react";
import Rating from "react-rating";

export default class Review extends Component {

  render() {
    return (
      <article className="review row" >
        <figure className="reviewer" >
          <img className="avatar" src={this.props.review.avatar} />
          <figcaption className="reviewer-name" >{this.props.review.reviewer}</figcaption>
        </figure>
        <blockquote className="review-text" >
          <Rating
           readonly={true}
           initialRate={this.props.review.rating}
           empty='fa fa-star-o'
           full='fa fa-star'
          />
          <p>{this.props.review.text}</p>
          <footer>{this.props.review.city}, {this.props.review.country} · {this.props.review.created_at}</footer>
        </blockquote>
      </article>
    )
  }
}