// Import dependencies
import { createMockStore } from 'redux-test-utils';
import React from 'react';
// Import jest config
import '../jest.config';
// Import test helpers
import { shallowWithStore, testState } from '../testHelpers';
// Import container/component
import { CustomerAppContainer } from '../../src/components/Containers';

// Setup 
const store = createMockStore(testState);
const wrapper = shallowWithStore(<CustomerAppContainer />, store);

describe('CustomerApp Component', () => {
  it('should render CustomerApp component', () => {
    global.expect(wrapper.length).to.equal(1);
    global.expect(wrapper.dive().exists()).to.equal(true);
    global.expect(wrapper.dive()).to.be.a('object');
    global.expect(wrapper.dive().text()).to.contain('This is the CustomerApp component');
  });
});