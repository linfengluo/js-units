'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stringfyQuerys = exports.getUrlQuerys = exports.getSingleQuery = undefined;

var _getSingleQuery = require('./src/getSingleQuery');

var _getSingleQuery2 = _interopRequireDefault(_getSingleQuery);

var _getUrlQuerys = require('./src/getUrlQuerys');

var _getUrlQuerys2 = _interopRequireDefault(_getUrlQuerys);

var _stringfyQuerys = require('./src/stringfyQuerys');

var _stringfyQuerys2 = _interopRequireDefault(_stringfyQuerys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getSingleQuery = _getSingleQuery2.default;
exports.getUrlQuerys = _getUrlQuerys2.default;
exports.stringfyQuerys = _stringfyQuerys2.default;