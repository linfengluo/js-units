"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getUrlQuerys() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
  var query = url.substring(url.lastIndexOf('?') + 1);
  var result = {};

  if (query) {
    result = JSON.parse("{\"".concat(decodeURIComponent(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"'), "\"}"));
  }

  return result;
}

var _default = getUrlQuerys;
exports.default = _default;