import React from 'react';
import { shallow } from 'enzyme';
import Film from './Film';

describe('Film', () => {
  it('should match the snapshot', () => {
    const wrapper= shallow(<Film/>)
    expect(wrapper).toMatchSnapshot()
  });
});