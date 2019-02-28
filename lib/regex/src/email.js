"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _const = require("./const");

function isEmail(email) {
  return _const.EMAIL_REGEXP.test(email);
}

var _default = isEmail;
exports.default = _default;