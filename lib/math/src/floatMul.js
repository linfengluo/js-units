"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function floatMul(multiplier, multiplicand) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  multiplier = isNaN(multiplier) ? 0 : Number(multiplier);
  multiplicand = isNaN(multiplicand) ? 0 : Number(multiplicand);
  var m = 0;
  var s1 = multiplier.toString();
  var s2 = multiplicand.toString();

  try {
    m += s1.split('.')[1].length;
  } catch (e) {}

  try {
    m += s2.split('.')[1].length;
  } catch (e) {}

  var result = Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
  return length === -1 ? result : parseFloat(result.toFixed(length));
}

var _default = floatMul;
exports.default = _default;