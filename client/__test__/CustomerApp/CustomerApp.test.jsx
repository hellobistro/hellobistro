import React from 'react';
import '../jest.config';

import CustomerApp from '../../src/components/CustomerApp/CustomerApp';

describe('<CustomerApp />', () => {
  it('', () => {
    const wrapper = global.shallow(<CustomerApp />);
    expect(wrapper.contains('<p>This is the <strong>CustomerApp</strong> component</p>'))
      .to.equal(true);
  });

});