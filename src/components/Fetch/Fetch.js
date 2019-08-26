import React, {Component} from 'react';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './Fetch.css';
// import Home from '../Home/Home';
import PrincessLeia from '../../images/PrincessLeia.png';
import Yoda from '../../images/Yoda.png';
import Chewbacca from '../../images/Chewbacca.png';
import DeathStar from '../../images/DeathStar.png';

class Fetch extends Component {
  constructor(props) {
    super(props)
    const {checkLoading} = props
    this.state = {
      people: [],
      vehicles : [],
      planets: [],
      favorites: []
    }
    this.checkLoading = checkLoading.bind(this);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data1 => this.fetchSpecies(data1))
    .then(data2 => this.fetchPlanets(data2))
    .then(result => {
      this.setState({ people: result });
      this.checkLoading()})
    .catch(error => console.log(error));

    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => this.fetchResidents(data.results))
      .then(result => this.setState({ planets: result }))
    .catch(error => console.log(error))

    fetch('https://swapi.co/api/vehicles/')
    .then(response => response.json())
    .then(response => response.results.map(item => {
      return {...item, type: "vehicles"}}))
    .then(result => this.setState({vehicles : result}))
    .catch(error => console.log(error))
  }

  fetchSpecies(people) {
    const promises = people.results.map(person => {
      return fetch(person.species)
      .then(response => response.json())
      .then(data => ({...person, species: data.name, type: "people"}))
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
        resident: array,
        type: "planets"
      };
    });
    return planets;
  }

  toggleFavorite = (name, type) => {
    if(!this.state.favorites.some(item => item.name === name)) {
      const {favorites} = this.state;
      const foundElement = this.state[type].find(item => item.name === name)
      this.setState({favorites: [...favorites, foundElement]})
    } else {
      const nonMatchingElements = this.state.favorites.filter(item => item.name !== name)
      this.setState({favorites: nonMatchingElements})
    }
  }

countFavorites = () => {
  return this.state.favorites.length;
}

  render() {
    return (
      <>
        <Router>
          <nav className="navContainer">
            {/* <NavLink to="/" className="nav"><button>HOME</button></NavLink> */}
            <NavLink to="/people" className="nav"><img className="buttonImages" src={PrincessLeia} alt='Princess Leia' /><button>PEOPLE</button></NavLink>
            <NavLink to="/vehicles" className="nav"><img className="buttonImages" src={Chewbacca} alt='Chewbacca' /><button>VEHICLES</button></NavLink>
            <NavLink to="/planets" className="nav"><img className="buttonImages" src={DeathStar} alt='DeathStar' /><button>PLANETS</button></NavLink>
            <NavLink to='/favorites' className="nav"><img className="buttonImages" src={Yoda} alt='Yoda' /><button>FAVORITES</button></NavLink>
          </nav>
          <Switch>
          <Route exact path='/people' render={() => <CategoriesContainer data={this.state.people} toggleFavorite={this.toggleFavorite} countFavorites={this.countFavorites}/>} />
          <Route path='/vehicles' render={() => <CategoriesContainer data={this.state.vehicles} toggleFavorite={this.toggleFavorite} countFavorites={this.countFavorites}/>} />
          <Route path='/planets' render={() => <CategoriesContainer data={this.state.planets} toggleFavorite={this.toggleFavorite} countFavorites={this.countFavorites}/>} />
          <Route path='/favorites' render={() => <CategoriesContainer data={this.state.favorites} toggleFavorite={this.toggleFavorite} countFavorites={this.countFavorites}/>} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default Fetch;
