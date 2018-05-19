// Import dependencies
import React from 'react';
// Import jest config
import '../jest.config';
// Import test helpers
import { initialState } from '../testHelpers';
// Import container/component
import { CustomerLoginContainer } from '../../src/components/Containers';

// Setup mocks
jest.mock('../../src/services/ApiService');

// Apply shallow rendering wrapper
const wrapper = shallow(<CustomerLoginContainer.WrappedComponent {...initialState} />);

describe('CustomerLogin Component', () => {
  it('should render the CustomerLogin component', () => {
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('.CustomerLogin').length).to.equal(1);
    expect(JSON.stringify(wrapper.instance().props)).to.equal(JSON.stringify(initialState));
  });
});
