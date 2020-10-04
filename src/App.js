import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Hire from './pages/Hire/Hire'
import Home from './pages/Home/Home'
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/hire" component={Hire} />
      </Router>
    )
  }
}

export default App;
