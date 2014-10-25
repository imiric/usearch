
/**
 * Module dependencies.
 */
var _ = require('lodash');

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

/**
 * Search for words in the dictionary starting with the given prefix
 */
function search(request, reply) {
  reply(wrapResponse(Result.SUCCESS, []));
}

/**
 * Create the dictionary of words
 */
function dictionary(request, reply) {
  reply(wrapResponse(Result.SUCCESS));
}
