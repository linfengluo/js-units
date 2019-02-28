"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inBrowser = _interopRequireDefault(require("./inBrowser"));

function isMobile() {
  if (!_inBrowser.default) {
    return 'undefined';
  }

  var ua = navigator.userAgent.toLowerCase();
  return !!ua.match(/applewebkit.*mobile.*/) || !!ua.match(/applewebkit/);
}

var _default = isMobile;
exports.default = _default;