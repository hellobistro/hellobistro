import React from 'react';
import '../jest.config';

import CustomerLogin from '../../src/components/CustomerApp/CustomerLogin';

describe('CustomerLogin Component:', () => {
  it('should render CustomerLogin component', () => {
    const wrapper = global.shallow(<CustomerLogin />);
    global.expect(wrapper.length).to.equal(1);
  });

});