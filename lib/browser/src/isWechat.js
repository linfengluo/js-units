'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


function isWechat() {
  var ua = window.navigator.userAgent.toLowerCase();
  return ua.match(/MicroMessenger/i) == 'micromessenger';
}

exports.default = isWechat;