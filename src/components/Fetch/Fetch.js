import React, {Component} from 'react';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import App from '../App/App';

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      vehicles : [],
      planets: [],
      favorites: [{name: 'KATIE'}]
    }
  }

  componentDidMount() {
    const people = fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => this.fetchSpecies(data) && this.fetchPlanets(data))
    .then(result => this.setState({people : result}))
    .catch(error => console.log(error));

    const planets = fetch('https://swapi.co/api/planets/')
    .then(response => response.json());

    const vehicles = fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json());

    const combined = { 'people': [], 'planets': [], 'vehicles': [] }

    Promise.all([people, planets, vehicles])
      .then((values) => {
        combined['people'] = values[0];
        combined['planets'] = values[1];
        combined['vehicles'] = values[2];
        return combined;
      })
      // .then(combined => console.log(combined))
      // .then(combined => this.setState({
        // people: combined.results
        // vehicles: combined.vehicles.results,
        // planets: combined.planets.results
      // }))
  }

  fetchSpecies(people) {
    const promises = people.results.map(person => {
      return fetch(person.species)
      .then(response => response.json())
      .then(data => ({...person, homeworld: data.name, species: data.name}))
      .catch(error => console.log(error))
    });
    console.log('species promises', Promise.all(promises))
    return Promise.all(promises);
  }

  fetchPlanets(people) {
    const promises = people.results.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({...person, homeworld: data.name}))
        .catch(error => console.log(error))
    });
    console.log('planets promises', Promise.all(promises))
    return Promise.all(promises);
  }

  render() {
    return (
      <>
        <nav className="navContainer">
      <Router>
          <NavLink to="/people" className="nav"><button>PEOPLE</button></NavLink>
          <NavLink to="/vehicles" className="nav"><button>VEHICLES</button></NavLink>
          <NavLink to="/planets" className="nav"><button>PLANETS</button></NavLink>
          <NavLink to='/favorites' className="nav"><button>FAVORITES</button></NavLink>
      </Router>
        </nav>
        <Router>
          <Route exact path='/people' render={() => <CategoriesContainer data={this.state.people} />} />
          <Route path='/vehicles' render={() => <CategoriesContainer data={this.state.vehicles} />} />
          <Route path='/planets' render={() => <CategoriesContainer data={this.state.planets} />} />
          <Route path='/favorites' render={() => <CategoriesContainer data={this.state.favorites} />} />
        </Router>
      </>
    )
  }
}

export default Fetch;