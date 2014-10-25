#!/usr/bin/env node

/**
 * Module dependencies.
 */
var Hapi = require('hapi'),
    handlers = require('./handlers');

var server = Hapi.createServer(8000, {
  payload: {
    maxBytes: process.env.MAX_PAYLOAD_SIZE || 5242880
  }
});

server.route([
  {
    method: 'GET',
    path: '/search/{prefix}',
    handler: handlers.search
  },
  {
    method: 'POST',
    path: '/dictionary',
    handler: handlers.dictionary
  },
]);

if (require.main === module) {
  server.start();
}

module.exports = server;
