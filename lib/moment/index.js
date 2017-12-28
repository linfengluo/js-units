'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.formatTimestamp = exports.formatDate = undefined;

var _formatDate = require('./src/formatDate');

var _formatDate2 = _interopRequireDefault(_formatDate);

var _formatTimestamp = require('./src/formatTimestamp');

var _formatTimestamp2 = _interopRequireDefault(_formatTimestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.formatDate = _formatDate2.default;
exports.formatTimestamp = _formatTimestamp2.default;