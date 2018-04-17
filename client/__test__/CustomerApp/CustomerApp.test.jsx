import React from 'react';
import { MemoryRouter } from 'react-router';
import '../jest.config';
import CustomerApp from '../../src/components/CustomerApp/CustomerApp';

import CustomerLoginPage from '../../src/components/CustomerApp/CustomerLogin';

describe('<CustomerApp />', () => {
  it('find a div with a class name of CustomerApp', () => {
    const wrapper = global.shallow(<CustomerApp />);
    expect(wrapper.find('.CustomerApp')).to.have.length(1);
  });

  it('render Customer Login Component', () => {
    const wrapper = '';
    
  });

  

});