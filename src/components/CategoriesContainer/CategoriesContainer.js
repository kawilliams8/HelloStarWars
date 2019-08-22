import React from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesContainer = ({ data }) => {
  const displayCards = data.map(card => <CategoryCard key={card.url} name={card.name} />);
    return (
    <article className= "categorycard">
        <h1>hello categories container</h1>
        {displayCards}
    </article>
    )
    
}

export default CategoriesContainer;