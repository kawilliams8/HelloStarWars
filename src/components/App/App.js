import React, { Component } from 'react';
import Film from '../Film/Film';
import Fetch from '../Fetch/Fetch';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state= {
      isLoading: true
    }
    this.checkLoading = this.checkLoading.bind(this);
  }

  checkLoading = () => {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 5000)
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

App.propTypes = {
  checkLoading: PropTypes.func,
}
