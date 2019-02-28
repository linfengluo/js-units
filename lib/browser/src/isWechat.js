"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inBrowser = _interopRequireDefault(require("./inBrowser"));

function isWechat() {
  if (!_inBrowser.default) {
    return 'undefined';
  }

  var ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == 'micromessenger';
}

var _default = isWechat;
exports.default = _default;