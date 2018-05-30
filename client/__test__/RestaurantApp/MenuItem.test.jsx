import React from 'react';

import '../jest.config';
import MenuItem from '../../src/components/RestaurantApp/MenuItem';

const mockProps = {
  data: {
    id: null,
  },
};

describe('MenuItem Component', () => {
  test('renders without error', () => {
    const wrapper = mount(<MenuItem {...mockProps} />);
    console.log(wrapper.html());
  });
});
