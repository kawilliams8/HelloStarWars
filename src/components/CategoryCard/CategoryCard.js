import React from 'react';
import '../CategoryCard/CategoryCard.css'

const CategoryCard = ( props ) => {
  const { name } = props
  const { homeworld, species, population} = props
  const { model, vehicle_class, passengers } = props
  const { terrain, climate, residents } = props
    return (
      <div className="card">
        <header>
        <h3>{name}</h3>
        </header>
        <ul>
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
          <button>FAV</button>
        </footer>

      </div>
    )
}

export default CategoryCard;