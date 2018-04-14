import React from 'react';
import '../jest.config';

import ConfirmOrder from '../../src/components/CustomerApp/ConfirmOrder';

describe('<ConfirmOrder />', () => {
  it('should display a Welcome heading', () => {
    const wrapper = global.shallow(<ConfirmOrder />);
    global.expect(wrapper.find('p').contains('ConfirmOrder')).to.equal(true);
  });

});