'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = require('./const');

function isUrl(url) {
  return _const.URL_REGEXP.test(url);
}

exports.default = isUrl;