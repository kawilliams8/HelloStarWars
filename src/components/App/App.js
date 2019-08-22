import React, { Component } from 'react';
import Aside from '../Aside/Aside';
import Fetch from '../Fetch/Fetch';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer'

import './App.css';

class App extends Component {

  render() {
    return(
      <main className="App">
        <h1>Swapi Box</h1>
        <Fetch />
        <Aside />
        <CategoriesContainer />

      </main>
    )
  }
}

export default App;
