import React from 'react';
import { shallow } from 'enzyme';
import CategoriesContainer from './CategoriesContainer';
import Fetch from '../Fetch/Fetch';

describe('CategoriesContainer', () => {
  const mockPeopleData =[{name: 'Luke Skywalker'},{name: 'Darth Vader'}]
  const mockVehicleData =[{name: 'Sand Crawler'},{name: 'Snowspeeder'}]
  const mockPlanetData =[{name: 'Hoth'},{name: 'Endor'}]
  const mockFavoritesData =[{name: 'Hoth'}, {name: 'Luke Skywalker'}]
  
  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer countFavorites={jest.fn()} data={mockPeopleData}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer countFavorites={jest.fn()} data={mockVehicleData}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer countFavorites={jest.fn()} data={mockPlanetData}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<CategoriesContainer countFavorites={jest.fn()} data={mockFavoritesData}/>)
    expect(wrapper).toMatchSnapshot()
  });

  it('should show the length of the favorites array', () => {
    let mockCountFavorites = jest.fn();
    const wrapper1 = shallow(<Fetch checkLoading={jest.fn()} />);
    const wrapper2 = shallow(<CategoriesContainer data={mockFavoritesData} toggleFavorite={jest.fn()} countFavorites={mockCountFavorites} />);
    wrapper1.setState({ favorites: mockFavoritesData })

    expect(mockCountFavorites).toHaveBeenCalled();
  });

});