// https://github.com/component/component/issues/212
var isInteger;
try {
  isInteger = require('isInteger');
} catch(e) {
  isInteger = require('isinteger-component');
}

/**
 * Calculate the greastest common divisor amongst two Numbers.
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Number} greatest common divisor for Number x, y.
 * @api public
 */
module.exports = function(x, y) {
  if (isInteger(x) && isInteger(y)) {
    var z;
    y = (+y && +x) ? +y : 0;
    x = y ? x : 1;

    while (y) {
      z = x % y;
      x = y;
      y = z;
    }

    return Math.abs(x);
  }
};