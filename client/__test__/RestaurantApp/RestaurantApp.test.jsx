import React from 'react';
import '../jest.config';

import RestaurantApp from '../../src/components/RestaurantApp/RestaurantApp';

describe('RestaurantApp Component', () => {
  it('should render RestaurantApp component', () => {
    const wrapper = global.shallow(<RestaurantApp />);
    global.expect(wrapper.length).to.equal(1);
  });

});