import React from 'react';
import '../jest.config';

import DashBoard from '../../src/components/RestaurantApp/DashBoard';

describe('RestaurantApp Component', () => {
  it('should render DashBoard component', () => {
    const wrapper = global.shallow(<DashBoard />);
    global.expect(wrapper.length).to.equal(1);
  });

});