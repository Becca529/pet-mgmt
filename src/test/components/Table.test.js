import React from 'react';
import {shallow} from 'enzyme';
import Table from '../../../src/components/home/Table';

describe('<Table />', () => {
    it('Renders without crashing', () => {
        shallow(<Table />);
    });
});