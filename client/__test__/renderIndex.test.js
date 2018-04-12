import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Test1 from '../src/components/Test1';

describe('Initial Testing of Components', () => {
  it('should render Test1 without throwing an error', () => {
    expect(shallow(<Test1 />).contains(<h1>This should only render when the route is /test1</h1>)).toBe(true);
  });
});