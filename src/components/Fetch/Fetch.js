import React, {Component} from 'react'

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
      .then(function (values) {
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
      <div>{this.state.people.map(person => <h3>{person.name}</h3>)}</div>
    )
  }
}

export default Fetch;