import React from 'react';
import {shallow} from 'enzyme';
import {VetForm} from '../../../src/components/vet/ VetForm'


describe('<VetForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<VetForm />);
    });
    
});