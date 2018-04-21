import React from 'react';
import '../jest.config';

import Menu from '../../src/components/CustomerApp/Menu';

describe('Menu Component:', () => {
  it('should render Menu component', () => {
    const wrapper = global.shallow(<Menu />);
    global.expect(wrapper.length).to.equal(1);
  });

});