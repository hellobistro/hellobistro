import React from 'react';
import '../jest.config';

import Promos from '../../src/components/RestaurantApp/Promos';

describe('RestaurantApp Component', () => {
  it('should render Promos component', () => {
    const wrapper = global.shallow(<Promos />);
    global.expect(wrapper.length).to.equal(1);
  });

});