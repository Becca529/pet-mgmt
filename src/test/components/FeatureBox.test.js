import React from 'react';
import {shallow} from 'enzyme';

import FeatureBox from '../../../src/components/landing/FeatureBox';

describe('<FeatureBox />', () => {
    it('Renders without crashing', () => {
        shallow(<FeatureBox />);
    });
});
