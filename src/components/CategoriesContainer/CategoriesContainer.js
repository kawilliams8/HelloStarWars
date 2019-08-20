import React from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoriesContainer = () => {
    return (
    <section className= "categorycard">
        <h1>hello categories container</h1>
        <CategoryCard />
    </section>
    )
    
}

export default CategoriesContainer;