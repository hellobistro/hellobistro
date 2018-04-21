import React from 'react';
import '../jest.config';

import RestaurantRegister from '../../src/components/RestaurantApp/RestaurantRegister';

describe('RestaurantApp Component', () => {
  it('should render RestaurantRegister component', () => {
    const wrapper = global.shallow(<RestaurantRegister />);
    global.expect(wrapper.length).to.equal(1);
  });

});