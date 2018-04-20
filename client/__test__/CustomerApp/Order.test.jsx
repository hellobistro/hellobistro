import React from 'react';
import '../jest.config';

import Order from '../../src/components/CustomerApp/Order';

describe('Order Component', () => {
  it('should render Order component', () => {
    const wrapper = global.shallow(<Order />);
    global.expect(wrapper.length).to.equal(1);
  });

});