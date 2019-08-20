import React, { Component } from 'react';
import Aside from '../Aside/Aside';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      data: [],
      favorites: []
    }
  }
  render() {
    return(
      <main className="App">
        <h1>Swapi Box</h1>
        <Aside />
        <CategoriesContainer />

      </main>
    )
  }
}

export default App;
