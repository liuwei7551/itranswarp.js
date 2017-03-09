/**
 * the ID generator always generates 50-chars string:
 *
 * var nextId = require('_id');
 * var the_id = nextId();
 */

const
    util = require('util'),
    uuid = require('uuid/v4');

var i, paddings = [];

for (i = 1; i < 30; i++) {
    paddings.push(new Array(i).join('0'));
}

/**
 * a id-generate function that generate 50-chars id string with:
 *   current timestamp;
 *   random uuid;
 *   server shard number (0 ~ 0xff, default to 0).
 */
function nextId () {
    // generate uuid with timestamp:
    var id = util.format('%d%s000', Date.now(), uuid().replace(/\-/g, ''));
    return paddings[50 - id.length] + id;
}
