import React from 'react';
import {shallow} from 'enzyme';

import Header from '../../../src/components/common/Header';

describe('<Header />', () => {

    it('Renders without crashing', () => {
        shallow(<Header />);
    });
});