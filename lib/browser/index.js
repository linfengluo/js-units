'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isWechat = exports.isMobile = exports.getOs = exports.getBrowser = undefined;

var _getBrowser = require('./src/getBrowser');

var _getBrowser2 = _interopRequireDefault(_getBrowser);

var _getOs = require('./src/getOs');

var _getOs2 = _interopRequireDefault(_getOs);

var _isMobile = require('./src/isMobile');

var _isMobile2 = _interopRequireDefault(_isMobile);

var _isWechat = require('./src/isWechat');

var _isWechat2 = _interopRequireDefault(_isWechat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getBrowser = _getBrowser2.default;
exports.getOs = _getOs2.default;
exports.isMobile = _isMobile2.default;
exports.isWechat = _isWechat2.default;