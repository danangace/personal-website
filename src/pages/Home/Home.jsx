import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Image from '../../assets/images/index'
import './Home.css'

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      coreValueList: [
        { image: Image.excellence, title: 'Excellence' },
        { image: Image.responsible, title: 'Responsible' },
        { image: Image.improve, title: 'Improve' },
        { image: Image.impact, title: 'Impact' }
      ]
    }
  }
  render () {
    return (
      <div>
        <Header route="/" />
        <Container className="core-value">
          <p className="core-title">Core Values</p>
          <div className="value-wrapper">
            { this.state.coreValueList.map((data,index) => {
              return (
                <Card icon={data.image} title={data.title} key={index} />
              )
            }) }
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Home