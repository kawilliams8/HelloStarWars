import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Fetch from './Fetch';
import { Route } from 'react-router-dom';

  describe('Fetch routes using memory router', () => {
    it('should show Fetch component for / router (using memory router)', () => {
      const component = mount(<MemoryRouter initialEntries={['/']} >
        <Fetch />
      </MemoryRouter>
      );
      expect(component.find(Fetch)).toHaveLength(1);
    });
    it('should match snapshot', () => {
      const wrapper = shallow(<Fetch/>)
      expect(wrapper).toMatchSnapshot()
    });
  });
