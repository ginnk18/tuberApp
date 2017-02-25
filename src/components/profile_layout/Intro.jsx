import React, { Component } from "react";

export default class Intro extends Component {

  render() {
    return (
      <div>
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
    )
  }
}