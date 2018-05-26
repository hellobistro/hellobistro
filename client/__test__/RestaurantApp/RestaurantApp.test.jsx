// Import dependencies
import React from 'react';
// Import jest config
import '../jest.config';
// Import test helpers
import { initialState } from '../testHelpers';
// Import container/component
import { RestaurantAppContainer } from '../../src/components/Containers';

// Setup mocks
jest.mock('../../src/services/ApiService');

// Apply shallow rendering wrapper
const wrapper = shallow(<RestaurantAppContainer.WrappedComponent {...initialState} />);

describe('RestaurantApp Component', () => {
  it('should render the RestaurantApp component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('.RestaurantApp').length).toBe(1);
    expect(JSON.stringify(wrapper.instance().props)).toBe(JSON.stringify(initialState));
  });
});
