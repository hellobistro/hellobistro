// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Import jest config
import '../jest.config';
// Import test helpers
import { initialState } from '../testHelpers';
// Import container/component
import CustomerNav from '../../src/components/CustomerApp/CustomerNav';

// Apply shallow rendering wrapper
const wrapper = shallow(<CustomerNav {...initialState} />);

describe('CustomerNav Component', () => {
  it('should render the CustomerNav component', () => {
    // Generate an array of all nav links
    let linkComponents = wrapper.find(Link);
    let linkListElements = wrapper.find('li');

    expect(wrapper.length).to.equal(1);
    expect(wrapper.find('.CustomerNav').length).to.equal(1);

    // Expect navbar to have 6 links
    expect(linkComponents.length).to.equal(6);
    expect(linkListElements.length).to.equal(7);
    expect(wrapper.find(Link).get(0).props.to).to.equal('/customer/home/findRestaurants');
    expect(wrapper.find(Link).get(1).props.to).to.equal('/customer/home/order');
    expect(wrapper.find(Link).get(2).props.to).to.equal('/customer/home/history');
    expect(wrapper.find(Link).get(3).props.to).to.equal('/customer/home/favorites');
    expect(wrapper.find(Link).get(4).props.to).to.equal('/customer/home/payment');
    expect(wrapper.find(Link).get(5).props.to).to.equal('/customer/home/settings');
    expect(wrapper.find('.link-log-out').find('span').text()).to.equal('Logout');
  });
});
