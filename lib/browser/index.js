"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getBrowser", {
  enumerable: true,
  get: function get() {
    return _getBrowser.default;
  }
});
Object.defineProperty(exports, "getOs", {
  enumerable: true,
  get: function get() {
    return _getOs.default;
  }
});
Object.defineProperty(exports, "isMobile", {
  enumerable: true,
  get: function get() {
    return _isMobile.default;
  }
});
Object.defineProperty(exports, "isWechat", {
  enumerable: true,
  get: function get() {
    return _isWechat.default;
  }
});

var _getBrowser = _interopRequireDefault(require("./src/getBrowser"));

var _getOs = _interopRequireDefault(require("./src/getOs"));

var _isMobile = _interopRequireDefault(require("./src/isMobile"));

var _isWechat = _interopRequireDefault(require("./src/isWechat"));