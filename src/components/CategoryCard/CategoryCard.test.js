import React from 'react';
import { shallow } from 'enzyme';
import CategoryCard from './CategoryCard';

describe('CategoryCard', () => {
  const card = {name: 'Luke Skywalker', homeworld: 'Tatooine', species: 'Human', population: '200000'}
  const index = 1
  it('should match the snapshot', () => {
    const wrapper= shallow(<CategoryCard 
      key={index} 
      name={card.name} 
      homeworld= {card.homeworld} 
      species={card.species} 
      population={card.population} 
      model={card.model} 
      vehicle_class={card.vehicle_class} 
      passengers={card.passengers} 
      terrain={card.terrain} 
      climate={card.climate}
      residents={card.resident}/>)

      expect(wrapper).toMatchSnapshot()
  });
  it('should match the snapshot', ()=> {
    const card= {model: 'Digger Crawler', class: 'wheeled', passengers: '30'}
    const index= 1;
    const wrapper= shallow(<CategoryCard 
      key={index} 
      name={card.name} 
      homeworld= {card.homeworld} 
      species={card.species} 
      population={card.population} 
      model={card.model} 
      vehicle_class={card.vehicle_class} 
      passengers={card.passengers} 
      terrain={card.terrain} 
      climate={card.climate}
      residents={card.resident}/>)

      expect(wrapper).toMatchSnapshot()
  })
  it('should match the snapshot', ()=> {
    const card= {name: 'Hoth', terrain: 'tundra, ice cave, mountain ranges', climate: 'frozen', residents: []}
    const index= 1;
    const wrapper= shallow(<CategoryCard 
      key={index} 
      name={card.name} 
      homeworld= {card.homeworld} 
      species={card.species} 
      population={card.population} 
      model={card.model} 
      vehicle_class={card.vehicle_class} 
      passengers={card.passengers} 
      terrain={card.terrain} 
      climate={card.climate}
      residents={card.resident}/>)

      expect(wrapper).toMatchSnapshot()
  })
});