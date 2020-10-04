import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import Image from '../../assets/images/index'
import './Navbar.css'

class Navbar extends Component {
  movePage = (link) => {
    this.props.history.push(link)
  }

  render() { 
    return ( 
      <Container className="navbar-wrapper">
        <div className="navbar-content">
          <div className="logo-wrapper">
            <img src={Image.logo} alt="logo" onClick={ () => this.movePage('/') } id="logo"></img>
          </div>
          <div className="nav-button-wrapper">
            <div className="contact-button my-font flex-center reg-btn" onClick={ () => this.movePage('/contact') }>Contact</div>
            <div className="hire-button my-font flex-center reg-btn" onClick={ () => this.movePage('/hire') }>Hire Me</div>
          </div>
        </div>
      </Container>
     );
  }
}
 
export default withRouter(Navbar);