const { describe, it, before } = require('mocha');
const chai = require('chai');
const { assert, expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../app');

const { sampleRestaurants, sampleCustomers } = require('../../sampleData');

chai.use(chaiHttp);

// NOTE:
// (1) Please make sure the HelloBistro server is running
// before running the following tests
// (2) These tests are based upon the static example data populating
// the database and should eventually be refactored to be dynamic

describe('/GET restaurants', () => {
  let response = null;

  before(function (done) {
    this.timeout(20000);
    chai.request(server)
      .get('/restaurants')
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          response = res;
        }
        done();
      });
  });
  
  it('should return a response with a 200 status code', (done) => {
    expect(response.status).to.equal(200);
    done();
  });

  it('should return an array of objects', (done) => {
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.be.an('object');
    done();
  });

  it('the returned array should contain all restaurants in the database', (done) => {
    expect(response.body[0].name).to.equal(sampleRestaurants[0].name);
    expect(response.body[1].name).to.equal(sampleRestaurants[1].name);
    expect(response.body[2].name).to.equal(sampleRestaurants[2].name);
    expect(response.body[3].name).to.equal(sampleRestaurants[3].name);  
    done();
  });
}).timeout(20000);

describe('/GET customers', () => {
  let response = null;

  before(function (done) {
    this.timeout(20000);
    chai.request(server)
      .get('/customers')
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          response = res;
        }
        done();
      });
  });
  
  it('should return a response with a 200 status code', (done) => {
    expect(response.status).to.equal(200);
    done();
  });

  it('should return an array of objects', (done) => {
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.be.an('object');
    done();
  });

  it('the returned array should contain all customers in the database', (done) => {
    expect(response.body[0].firstName).to.equal(sampleCustomers[0].firstName);
    expect(response.body[1].firstName).to.equal(sampleCustomers[1].firstName);
    expect(response.body[2].firstName).to.equal(sampleCustomers[2].firstName);
    expect(response.body[3].firstName).to.equal(sampleCustomers[3].firstName);  
    expect(response.body[4].firstName).to.equal(sampleCustomers[4].firstName);  
    done();
  });
}).timeout(20000);
