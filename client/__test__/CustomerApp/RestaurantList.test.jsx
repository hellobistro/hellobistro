import React from 'react';
import '../jest.config';

import RestaurantList from '../../src/components/CustomerApp/RestaurantList';

describe('RestaurantList Component', () => {
  it('should render RestaurantList component', () => {
    const wrapper = global.shallow(<RestaurantList />);
    global.expect(wrapper.length).to.equal(1);
  });

});