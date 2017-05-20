import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      axios_data: {}
    }
  }
  componentDidMount () {
    axios.get('/api/test').then(function(result){
      console.log('Result: ', result)
      this.setState({ axios_data: result.data})
    }.bind(this))
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
