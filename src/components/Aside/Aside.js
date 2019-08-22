import React, {Component} from 'react';
import '../Aside/Aside.css'

class Aside extends Component {
    constructor(){
        super()
        this.state= {
            film: []
        }
    }
    componentDidMount = () => {
        let randomNumber = Math.floor(Math.random()* 7)
        console.log('randomNumber', randomNumber)
        fetch('https://swapi.co/api/films')
            .then(response => response.json())
            .then(data => {
                console.log('data', data.results[randomNumber])
                return data;
            })
            .then(data => this.setState({film: data.results[randomNumber]}))
        
        }
        render() {
        return(
            <>
            <h2>{this.state.film.title}</h2>
            <h2>{this.state.film.release_date}</h2>
            <h2>{this.state.film.opening_crawl}</h2>
            </>
        )
    }
}

export default Aside;