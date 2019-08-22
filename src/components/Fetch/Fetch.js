import React, {Component} from 'react';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer'
import { Route, NavLink } from 'react-router-dom';

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      vehicles : [],
      planets: []
    }
  }

  componentDidMount() {
    const people = fetch('https://swapi.co/api/people/').then(response => response.json());
    const planets = fetch('https://swapi.co/api/planets/').then(response => response.json());
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(response => response.json());
    const combined = { 'people': [], 'planets': [], 'vehicles': [] }

    Promise.all([people, planets, vehicles])
      .then((values) => {
        combined['people'] = values[0];
        combined['planets'] = values[1];
        combined['vehicles'] = values[2];
        return combined;
      })
      .then(combined => this.setState({
        people: combined.people.results,
        vehicles: combined.vehicles.results,
        planets: combined.planets.results
      }))
  }

  render() {
    return (
      <>
        <nav className="navContainer">
          <NavLink to="/people" className="nav"><button>PEOPLE</button></NavLink>
          <NavLink to="/vehicles" className="nav"><button>VEHICLES</button></NavLink>
          <NavLink to="/planets" className="nav"><button>PLANETS</button></NavLink>
        </nav>
        <Route path='/people' render={() => <CategoriesContainer data={this.state.people} />} />
        <Route path='/vehicles' render={() => <CategoriesContainer data={this.state.vehicles} />} />
        <Route path='/planets' render={() => <CategoriesContainer data={this.state.planets} />} />
      </>
    )
  }
}

export default Fetch;