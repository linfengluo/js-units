"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function floatAdd(addend, augend) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  addend = isNaN(addend) ? 0 : Number(addend);
  augend = isNaN(augend) ? 0 : Number(augend);
  var r1;
  var r2;
  var m;
  var c;

  try {
    r1 = addend.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = augend.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }

  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));

  if (c > 0) {
    var cm = Math.pow(10, c);

    if (r1 > r2) {
      addend = Number(addend.toString().replace('.', ''));
      augend = Number(augend.toString().replace('.', '')) * cm;
    } else {
      addend = Number(addend.toString().replace('.', '')) * cm;
      augend = Number(augend.toString().replace('.', ''));
    }
  } else {
    addend = Number(addend.toString().replace('.', ''));
    augend = Number(augend.toString().replace('.', ''));
  }

  var result = (addend + augend) / m;
  return length === -1 ? result : parseFloat(result.toFixed(length));
}

var _default = floatAdd;
exports.default = _default;