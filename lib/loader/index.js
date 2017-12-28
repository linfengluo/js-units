'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.loadStyle = exports.loadScript = undefined;

var _loadScript = require('./src/loadScript');

var _loadScript2 = _interopRequireDefault(_loadScript);

var _loadStyle = require('./src/loadStyle');

var _loadStyle2 = _interopRequireDefault(_loadStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.loadScript = _loadScript2.default;
exports.loadStyle = _loadStyle2.default;