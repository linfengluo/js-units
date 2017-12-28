'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = require('./const');

function isEmail(email) {
  return _const.EMAIL_REGEXP.test(email);
}

exports.default = isEmail;