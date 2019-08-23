import React from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesContainer = ({ data }) => {
  console.log('people', data)
  const displayCards = data.map(card => <CategoryCard 
    key={card.url} 
    name={card.name} 
    homeworld= {card.homeworld} 
    species={card.species} 
    population={card.population} 
    model={card.model} 
    vehicle_class={card.vehicle_class} 
    passengers={card.passengers} 
    terrain={card.terrain} 
    climate={card.climate}
    residents={card.residents}/>);
    return (
    <article className= "categoriesContainer">
        {displayCards}
    </article>
    )
    
}

export default CategoriesContainer;