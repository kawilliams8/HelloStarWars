import React, { Component } from 'react';
import Film from '../Film/Film';
import Fetch from '../Fetch/Fetch';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoading: true
    }
  }

  checkLoading = () => {
    setTimeout(() => {

      this.setState({isLoading: false})
      console.log('is loading',this.state.isLoading)
    },5000)
  }
  render() {
    console.log('App', this.state)
    return(
      <main className="App">
        <h1>Swapi Box</h1>
        <Fetch checkLoading={this.checkLoading}/>
        {this.state.isLoading && <Film/>}
        {/* <Film /> */}
      </main>
    )
  }
}

export default App;
