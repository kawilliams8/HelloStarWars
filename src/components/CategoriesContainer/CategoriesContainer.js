import React from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import PropTypes from 'prop-types';

const CategoriesContainer = ({ data, toggleFavorite }) => {
  const displayCards = data.map(card => <CategoryCard 
    key={Date.now()}
    type={card.type}
    name={card.name} 
    homeworld= {card.homeworld} 
    species={card.species} 
    population={card.population} 
    model={card.model} 
    vehicle_class={card.vehicle_class} 
    passengers={card.passengers} 
    terrain={card.terrain} 
    climate={card.climate}
    residents={card.resident}
    toggleFavorite={toggleFavorite}
    />);
    return (
      <div className="bow">
        <header className="helloHeader">
          <h3>Faves</h3>
          <h1>Swapi Box</h1>
          <h3>Image</h3>
        </header>
        <article className= "categoriesContainer">
          {displayCards}
        </article>
      </div>
    )
}

export default CategoriesContainer;

CategoriesContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  toggleFavorite: PropTypes.func
}