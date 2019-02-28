"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _const = require("./const");

function isUrl(url) {
  return _const.URL_REGEXP.test(url);
}

var _default = isUrl;
exports.default = _default;