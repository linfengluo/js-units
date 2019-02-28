"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isEmail", {
  enumerable: true,
  get: function get() {
    return _email.default;
  }
});
Object.defineProperty(exports, "isIdCard", {
  enumerable: true,
  get: function get() {
    return _idcard.default;
  }
});
Object.defineProperty(exports, "isUrl", {
  enumerable: true,
  get: function get() {
    return _url.default;
  }
});
Object.defineProperty(exports, "isTel", {
  enumerable: true,
  get: function get() {
    return _tel.default;
  }
});

var _email = _interopRequireDefault(require("./src/email"));

var _idcard = _interopRequireDefault(require("./src/idcard"));

var _url = _interopRequireDefault(require("./src/url"));

var _tel = _interopRequireDefault(require("./src/tel"));