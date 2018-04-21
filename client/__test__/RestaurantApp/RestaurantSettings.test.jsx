import React from 'react';
import '../jest.config';

import RestaurantSettings from '../../src/components/RestaurantApp/RestaurantSettings';

describe('RestaurantApp Component', () => {
  it('should render RestaurantSettings component', () => {
    const wrapper = global.shallow(<RestaurantSettings />);
    global.expect(wrapper.length).to.equal(1);
  });

});