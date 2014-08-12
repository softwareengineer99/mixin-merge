/**
 * Merge object b with object a.
 *
 * var mixin=require('object-merge')
 * Object.prototype.foobar=function(){}
 * var a = { foo: 'bar' },
 *   b = { bar: 'foos' };
 * mixin(a, b);
 * // => { foo: 'bar', bar: 'baz' }
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} c
 * @api public
 */

exports = module.exports = function(a, b){
  var c={}
  if (a && b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)){
      	c[key] = b[key];
      }
    }
    for (var key in a) {
      if (a.hasOwnProperty(key)){
      	c[key] = a[key];
      }
    }
  }
  return c;
};