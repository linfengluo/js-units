'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getUrlQuerys = require('./getUrlQuerys');

var _getUrlQuerys2 = _interopRequireDefault(_getUrlQuerys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSingleQuery(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;

  var querys = (0, _getUrlQuerys2.default)(url);

  return querys[name] ? querys[name] : null;
}

exports.default = getSingleQuery;