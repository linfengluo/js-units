"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


function isMobile() {
  var ua = navigator.userAgent.toLowerCase();
  return !!ua.match(/applewebkit.*mobile.*/) || !!ua.match(/applewebkit/);
}

exports.default = isMobile;