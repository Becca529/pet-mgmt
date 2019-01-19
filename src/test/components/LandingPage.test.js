import React from 'react';
import {shallow} from 'enzyme';

import LandingPage from '../../../src/components/landing/LandingPage';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage />);
    });
});
