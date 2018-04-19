import React from 'react';
import '../jest.config';

import FindRestaurants from '../../src/components/CustomerApp/FindRestaurants';

describe('FindRestaurants Component:', () => {
  it('should render FindRestaurants component', () => {
    const wrapper = global.shallow(<FindRestaurantsContainer />);
    global.expect(wrapper.length).to.equal(1);
  });

});