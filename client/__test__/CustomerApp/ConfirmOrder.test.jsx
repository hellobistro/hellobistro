import React from 'react';
import '../jest.config';

import ConfirmOrder from '../../src/components/CustomerApp/ConfirmOrder';

describe('ConfirmOrder Component: ', () => {
  it('should render ConfirmOrder component', () => {
    const wrapper = global.shallow(<ConfirmOrder />);
    global.expect(wrapper.length).to.equal(1);
  });

});