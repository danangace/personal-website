import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Contact extends Component {
  render() { 
    return ( 
      <div>
        <Header route="/contact" />
        <Footer />
      </div>
     );
  }
}
 
export default Contact;