'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = require('./const');

function isTel(tel) {
  return _const.TEL_REGEXP.test(tel);
}

exports.default = isTel;