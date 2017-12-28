'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sessionStorage = exports.localstorage = exports.cookie = undefined;

var _cookie = require('./src/cookie.js');

var _cookie2 = _interopRequireDefault(_cookie);

var _localstorage = require('./src/localstorage.js');

var _localstorage2 = _interopRequireDefault(_localstorage);

var _sessionStorage = require('./src/sessionStorage.js');

var _sessionStorage2 = _interopRequireDefault(_sessionStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.cookie = _cookie2.default;
exports.localstorage = _localstorage2.default;
exports.sessionStorage = _sessionStorage2.default;