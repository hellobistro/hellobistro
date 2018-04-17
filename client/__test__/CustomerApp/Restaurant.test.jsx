import React from 'react';
import '../jest.config';

import Restaurant from '../../src/components/CustomerApp/Restaurant';

describe('Restaurant Component', () => {
  it('should render Restaurant component', () => {
    const wrapper = global.shallow(<Restaurant />);
    global.expect(wrapper.length).to.equal(1);
  });

});