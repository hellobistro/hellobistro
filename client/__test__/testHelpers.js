import { createMockStore } from 'redux-test-utils';
import React from 'react';

export const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return global.shallow(component, { context });
};

export const testState = {
  fakeData: {},
};
