// Import dependencies
import React from 'react';
// Import jest config
import '../jest.config';
// Import test helpers
import { initialState } from '../testHelpers';
// Import container/component
import { CardSection } from '../../src/components/CustomerApp/CardSection';

// Setup mocks
jest.mock('../../src/services/ApiService');

// Apply shallow rendering wrapper
const wrapper = shallow(<CardSection {...initialState} />);

describe('CardSection Component', () => {
  it('should render the CardSection component', () => {
    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('.CardSection').length).to.equal(1);
  });
});
