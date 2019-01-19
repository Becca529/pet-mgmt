import React from 'react';
import {shallow} from 'enzyme';

import HomePage from '../../../src/components/home/HomePage';

describe('<HomePage />', () => {
    it('Renders without crashing', () => {
        shallow(<HomePage />);
    });
});
