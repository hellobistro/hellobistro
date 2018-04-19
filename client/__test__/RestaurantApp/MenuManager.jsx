import React from 'react';
import '../jest.config';

import MenuManager from '../../src/components/RestaurantApp/MenuManager';

describe('RestaurantApp Component', () => {
  it('should render MenuManager component', () => {
    const wrapper = global.shallow(<MenuManager />);
    global.expect(wrapper.length).to.equal(1);
  });

});