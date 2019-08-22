import React, { Component } from 'react';
import Film from '../Film/Film';
import Fetch from '../Fetch/Fetch';

import './App.css';

class App extends Component {
  render() {
    return(
      <main className="App">
        <h1>Swapi Box</h1>
        <Fetch />
        <Film />
      </main>
    )
  }
}

export default App;
