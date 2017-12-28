"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


function isNull(value) {
  return !value && typeof value !== "undefined" && value !== 0;
}

exports.default = isNull;