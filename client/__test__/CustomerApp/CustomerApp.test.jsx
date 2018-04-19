import React from 'react';
import { MemoryRouter } from 'react-router';
import '../jest.config';
import CustomerApp from '../../src/components/CustomerApp/CustomerApp';

describe('CustomerApp Component:', () => {
  it('should render CustomerApp component', () => {
    const wrapper = global.shallow(<CustomerApp />);
    global.expect(wrapper.length).to.equal(1);
  });


});