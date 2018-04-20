import React from 'react';
import '../jest.config';

import RestaurantLogin from '../../src/components/RestaurantApp/RestaurantLogin';

describe('RestaurantLogin Component:', () => {
  it('should render RestaurantLogin component', () => {
    const wrapper = global.shallow(<RestaurantLogin />);
    global.expect(wrapper.length).to.equal(1);
  });

});