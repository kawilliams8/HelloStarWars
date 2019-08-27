import React from 'react';
import '../CategoryCard/CategoryCard.css';
import PropTypes from 'prop-types';
import '../CategoryCard/CategoryCard.css';
import Star from '../../images/Star.png';
import Heart from '../../images/Heart.png'

const CategoryCard = ( props ) => {
  const { name, type } = props;
  const { homeworld, species, population} = props;
  const { model, vehicle_class, passengers } = props;
  const { terrain, climate, residents } = props;
  const { toggleFavorite } = props;
    return (
      <div className="card">
        <header>
          <h3 className="cardTitle"><img className="star" src={Star} alt="star" height="21"/>{name}</h3>
        </header>
        <div className="list-container">
          <ul className="cardList">
            {species && <li>Species: {species}</li>}
            {homeworld && <li>Homeworld: {homeworld}</li>}
            {population && <li>Population: {population}</li>}
            {model && <li>Model: {model}</li>}
            {vehicle_class && <li>Class: {vehicle_class}</li>}
            {passengers && <li>Passengers: {passengers}</li>}

            {terrain && <li>Terrain: {terrain}</li>}
            {climate && <li>Climate: {climate}</li>}
            {residents && <ul>Residents: {(residents.map(resident => {
              return <li>{resident}</li>
              }))}</ul>}
          </ul>
          </div>
        <footer>
          <button className="cardButton" onClick={() => toggleFavorite(name, type)}><img className="faveHeart" src={Heart} alt="heart"/>FAV</button>
        </footer>
      </div>
    )
}

export default CategoryCard;

CategoryCard.propTypes = {
  climate: PropTypes.string,
  homeworld: PropTypes.string,
  model: PropTypes.string,
  name: PropTypes.string,
  passenger: PropTypes.number,
  populations: PropTypes.number,
  residents: PropTypes.arrayOf(PropTypes.string),
  species: PropTypes.string,
  terrain: PropTypes.string,
  toggleFavorite: PropTypes.func,
  type: PropTypes.string,
  vehicle_class: PropTypes.string
}