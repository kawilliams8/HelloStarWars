import React from 'react';
import { shallow } from 'enzyme';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  const mockPeopleData =[{name: 'Luke Skywalker'},{name: 'Darth Vader'}]
  const mockVehicleData =[{name: 'Sand Crawler'},{name: 'Snowspeeder'}]
  const mockPlanetData =[{name: 'Hoth'},{name: 'Endor'}]
  const mockFavoritesData =[{name: 'Hoth'}, {name: 'Luke Skywalker'}]
  
  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer data={mockPeopleData}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer data={mockVehicleData}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer data={mockPlanetData}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer data={mockFavoritesData}/>)
    expect(wrapper).toMatchSnapshot()
  });

});