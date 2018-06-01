import React from 'react';
import '../jest.config';
import { MemoryRouter } from 'react-router-dom';
import { CustomerListContainer } from '../../src/components/Containers';
import { fakeProps } from '../testHelpers';

jest.mock('../../src/services/ApiService.js');

// const fakeState = {
//   state: {
//     restaurant: {
//       analytics: {},
//       restaurantInfo: {
//         id: null,
//       },

//     },
//   },
// };

const wrapper = shallow(<MemoryRouter><CustomerListContainer.WrappedComponent {...fakeProps} /></MemoryRouter >);

describe('The CustomerList component', () => {
  test('it exists', () => {
    expect(wrapper.dive().dive().find('.CustomerList').length).toBe(1);
    console.log(wrapper.dive().debug());
  });
});
