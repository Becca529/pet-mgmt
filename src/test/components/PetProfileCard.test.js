import React from 'react';
import {shallow} from 'enzyme';

import PetProfileCard from '../../../src/components/home/PetProfileCard';

describe('<PetProfileCard />', () => {
    it('Renders without crashing', () => {
        shallow(<PetProfileCard />);
    });
});