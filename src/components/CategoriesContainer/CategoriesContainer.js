import React from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import PropTypes from 'prop-types';
import Bow from '../../images/Bow.png'
import Heart from '../../images/Heart.png'

const CategoriesContainer = ({ data, toggleFavorite, countFavorites }) => {
  const displayCards = data.map((card, index) => <CategoryCard 
    key={card.name + index}
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

    const favoriteCount = countFavorites();

    return (
      <div className="bow">
          <img className="pinkbow" src={Bow} alt=""/>
        <h1>Hello Star Wars</h1>
        <header className="helloHeader">
          <h3><img className="fav-heart" src={Heart} alt= ""/> Faves: {favoriteCount}</h3>
          {(countFavorites() <1) && <h3 className="pick-favorites"><img className="fav-heart" src={Heart} alt= ""/> Select Your Favorites!</h3>}
          <p></p>
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
  toggleFavorite: PropTypes.func,
  countFavorites: PropTypes.func
}