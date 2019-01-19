import React from 'react';
import {shallow} from 'enzyme';
import PetProfilePage from '../../../src/components/home/PetProfilePage';

describe('<PetProfilePage />', () => {
    it('Renders without crashing', () => {
        shallow(<PetProfilePage />);
    });
});