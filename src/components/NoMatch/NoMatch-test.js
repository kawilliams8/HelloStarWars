import React from 'react';
import {shallow} from 'enzyme';
import NoMatch from './NoMatch';

describe('NoMatch', () => {
    it('should match snapshot', ()=> {
        const wrapper = shallow(<NoMatch/>)
        expect(wrapper).toMatchSnapshot()
    })
})


