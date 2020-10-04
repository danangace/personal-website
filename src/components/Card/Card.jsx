import React, { Component } from 'react';
import './Card.css'


class Card extends Component {
  render() { 
    return ( 
      <div className="card-wrapper">
        <div className="card-box">
          <img src={this.props.icon} alt={this.props.title}></img>
        </div>
        <p className="myfont title-card">{this.props.title}</p>
      </div>
     );
  }
}
 
export default Card;