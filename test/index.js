
/**
 * Module dependencies.
 */
var server = require('..'),
    should = require('chai').should();

describe('#dictionary()', function() {
  it('should create a new dictionary of words', function(done) {
    var options = {
      method: 'POST',
      url: '/dictionary',
      payload: '["foo", "bar", "baz"]'
    };

    server.inject(options, function(response) {
      var result = response.result;
      response.statusCode.should.equal(200);
      result.status.should.equal('success');
      done();
    });
  });
});

describe('#search()', function() {
  it('should return all words in the dictionary starting with the given prefix', function(done) {
    var options = {
      method: 'GET',
      url: '/search/b'
    };

    server.inject(options, function(response) {
      var result = response.result;
      response.statusCode.should.equal(200);
      result.status.should.equal('success');
      result.data.should.deep.equal(['bar', 'baz']);
      done();
    });
  });
});
