const app = require('../app');
const assert = require('chai').assert;

describe('App', () => {
  it('should return a value', () => {
    assert.equal(app(), 'test');
  });
});