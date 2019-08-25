import React, { Component } from 'react';
import './Film.css'

class Film extends Component {
    constructor() {
        super()
        this.state = {
            film: []
        }
    }

    componentDidMount = () => {
        let randomNumber = Math.floor(Math.random() * 7)
        fetch('https://swapi.co/api/films')
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .then(data => this.setState({ film: data.results[randomNumber] }))

    }
    render() {
        return (
            <aside className="filmContainer">
                <div className="crawl">
                <h1>{this.state.film.title}</h1>
                <p>{this.state.film.release_date}</p>
                <p>{this.state.film.opening_crawl}</p>
                </div>
            </aside>
        )
    }
}

export default Film;