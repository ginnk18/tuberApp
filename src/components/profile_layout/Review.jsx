import React, { Component } from "react";

export default class Review extends Component {

  render() {
    return (
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
    )
  }
}