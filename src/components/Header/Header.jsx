import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Image from '../../assets/images/index'
import Navbar from '../Navbar/Navbar'
import './Header.css'


class Header extends Component {

  externalLink (link) {
    window.open(link, '_blank')
  }

  homeHeader = () => {
    return (
      <div className="content-homeheader">
        <div className="left-homeheader">
          <p className="my-font greeting">Hi, I’m Danang Putra Bahari.</p>
          <p className="my-font font-homeheader">Creative Developer.</p>
          <p className="my-font font-homeheader">Problem Solver.</p>
          <p className="my-font font-homeheader">Energetic Coder.</p>
          <div className="social-media">
            <img src={Image.github} alt="github" id="github" onClick={ () => this.externalLink('https://github.com/danangace') }></img>
            <img src={Image.linkedin} alt="linkedin" id="linkedin" onClick={ () => this.externalLink('https://www.linkedin.com/in/danangbahari/') }></img>
            <img src={Image.instagram} alt="instagram" id="instagram" onClick={ () => this.externalLink('https://www.instagram.com/danangace/') }></img>
          </div>
        </div>
        <div className="right-homeheader">
          <img src={Image.profile} alt="profile" id="profile"></img>
        </div>
      </div>
    )
  }

  contactHeader = () => {
    return (
      <div className="content-homeheader">
        <div className="left-homeheader">
          <p className="my-font greeting">Hi, I’m Danang Putra Bahari.</p>
          <p className="my-font font-homeheader">Sorry.</p>
          <p className="my-font font-homeheader">Page is under construction.</p>
          <p className="my-font font-homeheader">We will back soon.</p>
          <div className="social-media">
            <img src={Image.github} alt="github" id="github" onClick={ () => this.externalLink('https://github.com/danangace') }></img>
            <img src={Image.linkedin} alt="linkedin" id="linkedin" onClick={ () => this.externalLink('https://www.linkedin.com/in/danangbahari/') }></img>
            <img src={Image.instagram} alt="instagram" id="instagram" onClick={ () => this.externalLink('https://www.instagram.com/danangace/') }></img>
          </div>
        </div>
        <div className="right-homeheader">
          <img src={Image.profile} alt="profile" id="profile"></img>
        </div>
      </div>
    )
  }

  hireHeader = () => {
    return (
      <div className="content-homeheader">
        <div className="left-homeheader">
          <p className="my-font greeting">Hi, I’m Danang Putra Bahari.</p>
          <p className="my-font font-homeheader">Sorry.</p>
          <p className="my-font font-homeheader">Page is under construction.</p>
          <p className="my-font font-homeheader">We will back soon.</p>
          <div className="social-media">
            <img src={Image.github} alt="github" id="github" onClick={ () => this.externalLink('https://github.com/danangace') }></img>
            <img src={Image.linkedin} alt="linkedin" id="linkedin" onClick={ () => this.externalLink('https://www.linkedin.com/in/danangbahari/') }></img>
            <img src={Image.instagram} alt="instagram" id="instagram" onClick={ () => this.externalLink('https://www.instagram.com/danangace/') }></img>
          </div>
        </div>
        <div className="right-homeheader">
          <img src={Image.profile} alt="profile" id="profile"></img>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className="header-wrapper">
        <Navbar />
        <Container>
          { this.props.route === '/' ? this.homeHeader() : this.props.route === '/contact' ? this.contactHeader() : this.hireHeader() }
        </Container>
      </div>
    )
  }
}

export default withRouter(Header)