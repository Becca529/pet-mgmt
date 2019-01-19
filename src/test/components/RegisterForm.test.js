import React from 'react';
import {shallow} from 'enzyme';
import {RegistrationForm} from '../../../src/components/register/RegistrationForm';

describe('<RegistrationForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<RegistrationForm />);
    });
    
});