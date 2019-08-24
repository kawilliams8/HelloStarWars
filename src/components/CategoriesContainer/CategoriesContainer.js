import React from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import PropTypes from 'prop-types'

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
    <article className= "categoriesContainer">
      console.log('deuce')
      {displayCards}
    </article>
    )
}

export default CategoriesContainer;

CategoriesContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  toggleFavorite: PropTypes.func
}