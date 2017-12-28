'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.floatMul = exports.floatSub = exports.floatDiv = exports.floatAdd = undefined;

var _floatAdd = require('./src/floatAdd');

var _floatAdd2 = _interopRequireDefault(_floatAdd);

var _floatDiv = require('./src/floatDiv');

var _floatDiv2 = _interopRequireDefault(_floatDiv);

var _floatSub = require('./src/floatSub');

var _floatSub2 = _interopRequireDefault(_floatSub);

var _floatMul = require('./src/floatMul');

var _floatMul2 = _interopRequireDefault(_floatMul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.floatAdd = _floatAdd2.default;
exports.floatDiv = _floatDiv2.default;
exports.floatSub = _floatSub2.default;
exports.floatMul = _floatMul2.default;