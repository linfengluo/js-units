"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cookie", {
  enumerable: true,
  get: function get() {
    return _cookie.default;
  }
});
Object.defineProperty(exports, "localstorage", {
  enumerable: true,
  get: function get() {
    return _localstorage.default;
  }
});
Object.defineProperty(exports, "sessionStorage", {
  enumerable: true,
  get: function get() {
    return _sessionStorage.default;
  }
});

var _cookie = _interopRequireDefault(require("./src/cookie.js"));

var _localstorage = _interopRequireDefault(require("./src/localstorage.js"));

var _sessionStorage = _interopRequireDefault(require("./src/sessionStorage.js"));