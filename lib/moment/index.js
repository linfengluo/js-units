"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "formatDate", {
  enumerable: true,
  get: function get() {
    return _formatDate.default;
  }
});
Object.defineProperty(exports, "formatTimestamp", {
  enumerable: true,
  get: function get() {
    return _formatTimestamp.default;
  }
});

var _formatDate = _interopRequireDefault(require("./src/formatDate"));

var _formatTimestamp = _interopRequireDefault(require("./src/formatTimestamp"));