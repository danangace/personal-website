import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Image from '../../assets/images/index'
import './Footer.css'

class Footer extends Component {
  render() { 
    return ( 
      <div className="footer">
        <Container className="footer-content">
          <div className="left-footer">
            <img src={Image.logo} alt="logo"></img>
            <div className="copyright">
              <p className="my-font copyright">Copyright 2020</p>
              <p className="my-font copyright">Privacy Policy | Danang Putra Bahari</p>
            </div>
          </div>
          <div className="right-footer">
            <div className="info">
              <p className="my-font footer-list">About</p>
              <p className="my-font footer-list">Contact</p>
            </div>
            <div className="portofolio">
              <p className="my-font footer-list">Portofolio</p>
            </div>
            <div className="hire">
              <p className="my-font footer-list">Hire Me</p>
            </div>
          </div>
        </Container>
      </div>
     );
  }
}
 
export default Footer;