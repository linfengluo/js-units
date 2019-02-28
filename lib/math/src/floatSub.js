"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function floatSub(reduction, minuend) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  reduction = isNaN(reduction) ? 0 : Number(reduction);
  minuend = isNaN(minuend) ? 0 : Number(minuend);
  var r1;
  var r2;
  var m;
  var n;

  try {
    r1 = reduction.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = minuend.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  var result = (reduction * m - minuend * m) / m;
  return parseFloat(result.toFixed(length === -1 ? n : length));
}

var _default = floatSub;
exports.default = _default;