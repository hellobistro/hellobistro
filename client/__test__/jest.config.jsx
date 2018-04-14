import Enzyme, { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import { sinon } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import register from 'ignore-styles';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// ignore css files
register(['.css', '.sass', '.scss']);

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.expect = expect;
global.sinon = sinon;