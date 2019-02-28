"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getUrlQuerys = _interopRequireDefault(require("./getUrlQuerys"));

function getSingleQuery(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
  var querys = (0, _getUrlQuerys.default)(url);
  return querys[name] ? querys[name] : null;
}

var _default = getSingleQuery;
exports.default = _default;