import React from 'react';
import {shallow} from 'enzyme';

import {PetProfileForm} from '../../../src/components/home/PetProfileForm'


describe('<RegistrationForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<PetProfileForm />);
    });
   
});