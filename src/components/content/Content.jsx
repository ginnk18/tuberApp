import React, { Component } from 'react';
import Card from '../card/Card.jsx';

class Content extends Component {

  render() {
    return (
      <section className="content">
        <div className="row">
          <Card />
        </div>
      </section>
    );
  }
}

export default Content;