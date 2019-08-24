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
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data1 => this.fetchSpecies(data1))
    .then(data2 => this.fetchPlanets(data2))
    .then(result => this.setState({people : result}))
    .catch(error => console.log(error));

    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => this.fetchResidents(data.results))
    .then(result => this.setState({planets: result}))
    .catch(error => console.log(error))

    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then(result => this.setState({vehicles : result.results}))
    .catch(error => console.log(error))
  }

  fetchSpecies(people) {
    const promises = people.results.map(person => {
      return fetch(person.species)
      .then(response => response.json())
      .then(data => ({...person, species: data.name}))
      .catch(error => console.log(error))
    })
    return Promise.all(promises)
  }

  fetchPlanets(people) {
    const promises = people.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({...person, homeworld: data.name, population: data.population}))
        .catch(error => console.log(error))
    });
    return Promise.all(promises);
  }

  fetchResidents(data) {
    const planets = data.map(planet => {
      let array = [];
      planet.residents.forEach(resident => {
        return fetch(resident)
        .then(response => response.json())
        .then(data => array.push(data.name))
      });

      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        resident: array
      };
    });
    return planets;
  }

  render() {
    return (
      <>
        <Router>
          <nav className="navContainer">
            <NavLink to="/people" className="nav"><button>PEOPLE</button></NavLink>
            <NavLink to="/vehicles" className="nav"><button>VEHICLES</button></NavLink>
            <NavLink to="/planets" className="nav"><button>PLANETS</button></NavLink>
            <NavLink to='/favorites' className="nav"><button>FAVORITES</button></NavLink>
          </nav>
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