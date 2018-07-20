const app     = require("../app");
const request = require("request");
const chai    = require("chai");
const assert  = chai.assert;

describe('Send GET request to /', () => {
  it('it should GET "hello, world"', (done) => {
    request('http://localhost:3000' , (error, res, body) => {
      assert.equal(res.body, "hello, world", "res.body == 'hello, world'")
      done();
    });
  });
});

describe('Send GET request to /404', () => {
  it('it should GET "Not Found"', (done) => {
    request('http://localhost:3000/404' , (error, res, body) => {
      assert.equal(res.body, "Not Found", "res.body == 'Not Found'")
      done();
    });
  });
});
