//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('test server', () => {

  var server = require('../server');

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
    server.close();
  });
  
  /*
  * Test the /GET route
  */
  describe('/GET root', () => {
    it('it should GET the root doc', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          //console.log(res.body);
          res.body.should.be.a('object');
          res.text.should.be.eql('Hello world running version 0.0.1\n');
          done();
        });
    });
  });

});