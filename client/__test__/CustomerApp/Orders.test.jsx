import React from 'react';
import '../jest.config';

import Orders from '../../src/components/CustomerApp/Orders';

describe('Orders Component', () => {
  it('should render Orders component', () => {
    const wrapper = global.shallow(<Orders />);
    global.expect(wrapper.length).to.equal(1);
  });

});