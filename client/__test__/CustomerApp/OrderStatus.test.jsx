import React from 'react';
import '../jest.config';

import OrderStatus from '../../src/components/CustomerApp/OrderStatus';

describe('OrderStatus Component', () => {
  it('should render OrderStatus component', () => {
    const wrapper = global.shallow(<OrderStatus />);
    global.expect(wrapper.length).to.equal(1);
  });

});