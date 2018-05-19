// Import dependencies
import React from 'react';
// Import jest config
import '../jest.config';
// Import test helpers
import { initialState } from '../testHelpers';
// Import container/component
import { CustomerAppContainer } from '../../src/components/Containers';

// Setup mocks
jest.mock('../../src/services/ApiService');

// Apply shallow rendering wrapper
const wrapper = shallow(<CustomerAppContainer.WrappedComponent {...initialState} />);

describe('CustomerApp Component', () => {
  it('should render the CustomerApp component', () => {
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('.CustomerApp').length).to.equal(1);
    expect(JSON.stringify(wrapper.instance().props)).to.equal(JSON.stringify(initialState));
  });
});
