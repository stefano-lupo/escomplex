/* globals require, exports */
'use strict'
var traits = require('../traits')
var safeName = require('../safeName')
exports.get = get

function get () {
  return traits.actualise(0, 0, 'function', function (node) {
    return safeName(node.id)
  }, [
    'params',
    'body'
  ], undefined, true)
}
