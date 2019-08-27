import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Fetch from './Fetch';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer';
import NoMatch from '../NoMatch/NoMatch'

  describe('Fetch routes using memory router', () => {
    it('should show Fetch component for / router (using memory router)', () => {
      const component = mount(<MemoryRouter initialEntries={['/']} >
        <Fetch checkLoading={jest.fn()}/>
      </MemoryRouter>
      );
      expect(component.find(Fetch)).toHaveLength(1);
    });

    it('should show a CategoriesContainer component for /people router', () => {
      const mockPeopleData = [{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }]
      const component = mount(<MemoryRouter initialEntries={['/people']}>
        <CategoriesContainer countFavorites={jest.fn()} data={mockPeopleData}/>
      </MemoryRouter>)
      expect(component.find(CategoriesContainer)).toHaveLength(1);
    });

    it('should show a CategoriesContainer component for /vehicles router', () => {
      const mockVehicleData = [{ name: 'Sand Crawler' }, { name: 'Snowspeeder' }]
      const component = mount(<MemoryRouter initialEntries={['/people']}>
        <CategoriesContainer countFavorites={jest.fn()} data={mockVehicleData} />
      </MemoryRouter>)
      expect(component.find(CategoriesContainer)).toHaveLength(1);
    });

    it('should show a CategoriesContainer component for /planets router', () => {
      const mockPlanetData = [{ name: 'Hoth' }, { name: 'Endor' }]
      const component = mount(<MemoryRouter initialEntries={['/people']}>
        <CategoriesContainer countFavorites={jest.fn()} data={mockPlanetData} />
      </MemoryRouter>)
      expect(component.find(CategoriesContainer)).toHaveLength(1);
    });

    it('should show a CategoriesContainer component for /favorites router', () => {
      const mockFavoritesData = [{ name: 'Hoth' }, { name: 'Luke Skywalker' }]
      const component = mount(<MemoryRouter initialEntries={['/people']}>
        <CategoriesContainer countFavorites={jest.fn()} data={mockFavoritesData} />
      </MemoryRouter>)
      expect(component.find(CategoriesContainer)).toHaveLength(1);
    });
    it('should show a NoMatch component for route not defined', () => {
      const component = mount(<MemoryRouter initialEntries={['/abc']}>
        <Fetch checkLoading={jest.fn()}/>
      </MemoryRouter>)
      expect(component.find(NoMatch)).toHaveLength(1);
    });

    it('should match snapshot', () => {
      const wrapper = shallow(<Fetch checkLoading={jest.fn()}/>)
      expect(wrapper).toMatchSnapshot();
    });

    it('should update state as favorites are toggled', () => {
      const wrapper = shallow(<Fetch checkLoading={jest.fn()}/>);
      const mockFavorite = { name: "Luke Skywalker", type: "people", homeworld: "Tatooine", species: "Human", population: '200000' };
      wrapper.setState({people: [mockFavorite]})
      const expected = [mockFavorite];
      wrapper.instance().toggleFavorite("Luke Skywalker", "people");
      expect(wrapper.state('favorites')).toEqual(expected);
    });
    

  });
