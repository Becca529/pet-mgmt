import React from 'react';
import {shallow} from 'enzyme';

import Table from '../../../src/components/Home/Table';

describe('<Table />', () => {

    it('Renders without crashing', () => {
        shallow(<Table />);
    });
});