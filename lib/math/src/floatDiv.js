"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function floatDiv(divisor, dividend) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  divisor = isNaN(divisor) ? 0 : Number(divisor);
  dividend = isNaN(dividend) ? 1 : Number(dividend);
  var r1;
  var r2;
  var t1;
  var t2;

  try {
    t1 = divisor.toString().split('.')[1].length;
  } catch (e) {}

  try {
    t2 = dividend.toString().split('.')[1].length;
  } catch (e) {}

  r1 = Number(divisor.toString().replace('.', ''));
  r2 = Number(dividend.toString().replace('.', ''));
  r2 = r2 === 0 ? 1 : r2;
  var result = r1 / r2 * Math.pow(10, t2 - t1);
  return length === -1 ? result : parseFloat(result.toFixed(length));
}

var _default = floatDiv;
exports.default = _default;