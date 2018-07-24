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

describe('Send POST request to /user/authenticate', () => {
  it('it should be authenticated successfully', (done) => {
    var options = {
      uri: 'http://localhost:3000/user/authenticate',
      method: 'post',
      headers: {
        "Content-type": "application/json",
      },
      json: {
        "account": "kazuki",
        "password": "password"
      }
    };
    request(options , (error, res, body) => {
      assert.equal(res.body.status, "success", "res.body.status == 'success'");
      done();
    });
  });
  it('it should be failed to authenticate', (done) => {
    var options = {
      uri: 'http://localhost:3000/user/authenticate',
      method: 'post',
      headers: {
        "Content-type": "application/json",
      },
      json: {
        "account": "kazuki",
        "password": "passwordddddddd"
      }
    };
    request(options , (error, res, body) => {
      assert.equal(res.body.status, "fail", "res.body.status == 'fail'");
      done();
    });
  });
});
