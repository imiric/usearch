
/**
 * Module dependencies.
 */
var _ = require('lodash'),
    Dawg = require('udawg');

exports = module.exports = {
  search: search,
  dictionary: dictionary
}

// Enum to standardize response status text
var Result = {
  SUCCESS: 'success',
  FAIL:    'fail',
  ERROR:   'error'
}

/**
 * Wrap the response data in a uniform object.
 */
function wrapResponse(result, data, extra) {
  return _.merge(
    {status: result},
    data ? {data: data} : {},
    extra || {}
  );
}


var dawg = Dawg();

/**
 * Search for words in the dictionary starting with the given prefix
 */
function search(request, reply) {
  var prefix = request.params.prefix,
      node = dawg.lookup(prefix, false),
      result = dawg.values(node, prefix);

  reply(wrapResponse(Result.SUCCESS, result));
}

/**
 * Create the dictionary of words
 */
function dictionary(request, reply) {
  var words = request.payload || [];
  words.forEach(function(word) {
    dawg.insert(word);
  });
  reply(wrapResponse(Result.SUCCESS));
}
