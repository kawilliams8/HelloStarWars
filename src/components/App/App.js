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
    },10000)
  }

  render() {
    return(
      <>
        <main className="App">
          <Fetch checkLoading={this.checkLoading}/>
          {this.state.isLoading && <Film/>}
        </main>
      </>
    )
  }
}

export default App;
