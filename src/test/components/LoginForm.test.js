import React from 'react';
import {shallow} from 'enzyme';

import {LoginForm} from '../../../src/components/login/LoginForm';

import { Field } from 'redux-form';

describe('<LoginForm />', () => {
    it('Renders without crashing.', () => {
        shallow(<LoginForm />);
    });
    // it('Renders one or more Field elements', () => {
    //     const wrapper = shallow(<LoginForm />);
    //     expect(wrapper.find(Field).length).toBeGreaterThanOrEqual(1);
    // });
    // it('Calls the handleSubmit function on submit', () => {
    //     const onSubmit = jest.fn();
    //     const wrapper = shallow(<LoginForm onSubmit={this.props.onSubmit} />);
    //     wrapper.simulate('submit');
    //     expect(onSubmit).toHaveBeenCalled();
    // });
});