"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isNull(value) {
  return !value && typeof value !== "undefined" && value !== 0;
}

var _default = isNull;
exports.default = _default;