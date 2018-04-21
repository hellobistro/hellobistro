// Import dependencies
import { createMockStore } from 'redux-test-utils';
import React from 'react';
// Import jest config
import '../jest.config';
// Import test helpers
import { shallowWithStore, testState } from '../testHelpers';
// Import container/component
import { RestaurantLoginContainer } from '../../src/components/Containers';

// Setup 
const store = createMockStore(testState);
const wrapper = shallowWithStore(<RestaurantLoginContainer />, store);

describe('RestaurantLogin Component', () => {
  it('should render RestaurantLogin component', () => {
    global.expect(wrapper.length).to.equal(1);
    global.expect(wrapper.dive().exists()).to.equal(true);
    global.expect(wrapper.dive()).to.be.a('object');
    global.expect(wrapper.dive().text()).to.contain('This is the RestaurantLogin component');
  });
});