import React from 'react';
import '../CategoryCard/CategoryCard.css'

const CategoryCard = ({name}) => {
    return (
      <div>
        <h3 className="Card">{name}</h3>
      </div>
    )
}

export default CategoryCard;