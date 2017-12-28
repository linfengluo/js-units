'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isTel = exports.isUrl = exports.isIdCard = exports.isEmail = undefined;

var _email = require('./src/email');

var _email2 = _interopRequireDefault(_email);

var _idcard = require('./src/idcard');

var _idcard2 = _interopRequireDefault(_idcard);

var _url = require('./src/url');

var _url2 = _interopRequireDefault(_url);

var _tel = require('./src/tel');

var _tel2 = _interopRequireDefault(_tel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.isEmail = _email2.default;
exports.isIdCard = _idcard2.default;
exports.isUrl = _url2.default;
exports.isTel = _tel2.default;