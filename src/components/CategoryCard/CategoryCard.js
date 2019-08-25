import React from 'react';
import '../CategoryCard/CategoryCard.css';
import PropTypes from 'prop-types';
import '../CategoryCard/CategoryCard.css';

const CategoryCard = ( props ) => {
  const { name, type } = props;
  const { homeworld, species, population} = props;
  const { model, vehicle_class, passengers } = props;
  const { terrain, climate, residents } = props;
  const { toggleFavorite } = props;
    return (
      <div className="card">
        <header>
        <h3>{name}</h3>
        </header>
        <ul className="cardList">
          {homeworld && <li>{homeworld}</li>}
          {species && <li>{species}</li>}
          {population && <li>{population}</li>}

          {model && <li>{model}</li>}
          {vehicle_class && <li>{vehicle_class}</li>}
          {passengers && <li>{passengers}</li>}
          
          {terrain && <li>{terrain}</li>}
          {climate && <li>{climate}</li>}
          {residents && <ul>{(residents.map(resident => {
            return <li>{resident}</li>
            }))}</ul>}
        </ul>
        <footer>
          <button className="cardButton" onClick={() => toggleFavorite(name, type)}>FAV</button>
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