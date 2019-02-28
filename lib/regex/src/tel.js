"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _const = require("./const");

function isTel(tel) {
  return _const.TEL_REGEXP.test(tel);
}

var _default = isTel;
exports.default = _default;