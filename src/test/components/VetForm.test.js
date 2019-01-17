import React from 'react';
import {shallow} from 'enzyme';

import {VetForm} from '../../../src/components/vet/ VetForm'

import { Field } from 'redux-form';

describe('<VetForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<VetForm />);
    });
    
});