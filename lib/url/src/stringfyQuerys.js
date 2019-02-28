"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function stringfyQuerys(query) {
  if (!query) return '';
  var queryArray = [];

  for (var key in query) {
    var value = query[key];

    if (value instanceof Array) {
      for (var index in value) {
        var ketTemp = "".concat(key, "[").concat(index, "]");
        queryArray.push("".concat(encodeURIComponent(ketTemp), "=").concat(encodeURIComponent(value[i])));
      }

      continue;
    } else {
      queryArray.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(query[key])));
    }
  }

  return queryArray.join('&');
}

var _default = stringfyQuerys;
exports.default = _default;