// Import dependencies
import React from 'react';
// Import jest config
import '../jest.config';
// Import test helpers
import { initialState } from '../testHelpers';
// Import container/component
import { AddPayment } from '../../src/components/CustomerApp/AddPayment';

// Setup mocks
jest.mock('../../src/services/ApiService');

// Apply shallow rendering wrapper
const wrapper = shallow(<AddPayment {...initialState} />);

describe('AddPayment Component', () => {
  it('should render the AddPayment component', () => {
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('.AddPayment').length).to.equal(1);
    expect(JSON.stringify(wrapper.instance().props)).to.equal(JSON.stringify(initialState));
  });
});
